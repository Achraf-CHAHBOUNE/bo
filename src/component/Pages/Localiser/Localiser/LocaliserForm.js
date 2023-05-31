import React, {useState } from 'react';
import "./LocaliserForm.css"
import bottuLogo from "../../../Assets/image/logo1.jpg"
import { Link } from "react-router-dom"
import axios from 'axios';


const LocaliserForm = () => {
    const [inputs, setInputs] =useState({location:''}) ;
    const [Msg,setMsg ] = useState("");
    const [Error, setError] = useState("");
    const [label, setLabel] = useState("");
    
    

    const handlechange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setInputs({[name]:value});
    }

   
        const handleCopy = (e) => {
            const text = e.target.innerText;
            navigator.clipboard.writeText(text)
                .then(() => {
                    console.log('Text copied to clipboard');
                })
                .catch((error) => {
                    console.error('Error copying text:', error);
                });
        };
    
    const handlesubmit = (e) => {
        e.preventDefault();
        console.log(inputs);
        if (inputs === [] || inputs.location === '') {
            setError("veuillez remplir le champ du codebar s'il vous plait");
            setMsg("");
        } else {
            axios.post('http://localhost/api/localiser.php', inputs)
                .then(res => {
                    console.log(res.data)
                    if (res.data !== false) {
                        setMsg(res.data.placement);
                        setLabel("vous pouvez trouvez ce produit a ")
                    } else {
                        setError("Ce produit n'existe pas dans le stock ")
                        setMsg("")
                    }
            
                })
                .catch(err => {
                    console.error(err);
                    setError(err)
                    setMsg("")
                })
        }
        
        console.log(Error)
        console.log(Msg)
    }

    return (
        <div>
            <section>
                <form onSubmit={handlesubmit}>
                    <div className='save_part'>
                    <div className='btn_enreg'>
                    <Link className='link_logo' to={"/"}><img className='logo_enr' src={bottuLogo} alt='bottuLogo' /><br /></Link>
                    <input type="text" className='enregister_btn' placeholder='entrer le code produit' name='location' onChange={handlechange}/><br/>
                    {
                    (Msg!=="") ? <div className='location'><p>{label}<br/> <span onClick={handleCopy}>{Msg}</span></p></div> :
                                 <p className='prob'>{Error}</p>
                    }
                    <button className='submitlib_btn' >Find Emplacement</button>
                    </div><br />
                    <div className='Label_enr'>
                    <p>Your Health,<br/><span> Our Mission</span>.</p>   
                    </div>    
                    </div>
                </form>
            </section>
        </div>
    );
};

export default LocaliserForm;