import React, { useRef ,useState} from 'react';
import "./EnregisterForm.css"
import bottuLogo from "../../../Assets/image/logo1.jpg"
import { Link } from "react-router-dom"
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const EnregistrerForm = () => {

    const navigate = useNavigate();
    const [inputs, setInputs] = useState({});
    const BarRef = useRef(null);
    const EmplRef = useRef(null);
    const [Label, setLabel] = useState();
    const [msg, setMsg] = useState();
    // const [person,setperson]= useState(localStorage.getItem("profile"))
    
    const handlechange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInputs(values => ({ ...values, [name]: value }));
    }
    const handlesubmit = (e) => {
        e.preventDefault();
        console.log(inputs);
        const variable ={...inputs,profile:localStorage.getItem("profile")}
        console.log(variable);
        console.log(inputs);
        
        axios.post('http://localhost/api/user/save', variable).then(function (response) {
            console.log( response.data.status);
            if (response.data.status === 1) {
                navigate('/Enregistrer');
                BarRef.current.value = '';
                EmplRef.current.value = '';
                BarRef.current.focus();
                setMsg('Ce Enregistrement est bien effectuer!');
                setLabel('effectuer_class')
                setInputs();
            } else {
                setMsg('Ce Enregistrement est declencher');
                setLabel('erreur_class');
            }
            
            
        });
      
    }
    return (
        <div>
            <section>
                <form onSubmit={handlesubmit}>
                    <div className='save_part'>
                    <div className='btn_enreg'>
                            <Link className='link_logo' to={"/"}><img className='logo_enr' src={bottuLogo} alt='bottuLogo' /><br /></Link>
                            <p className={Label}>{msg}</p>
                    <input type="text" className='enregister_btn' name='barcode' ref={BarRef} placeholder='entrer le code produit' onChange={handlechange}/><br/>
                    <input type="text" className='enregister_btn' name='placement' ref={EmplRef} placeholder='entrer emplacement'  onChange={handlechange}/><br />
                    <button className='submit_btn'>Enregister</button>
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

export default EnregistrerForm;