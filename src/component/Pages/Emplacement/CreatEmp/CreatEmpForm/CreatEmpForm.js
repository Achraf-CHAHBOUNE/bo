import React, { useRef ,useState} from 'react';
import bottuLogo from "../../../../Assets/image/logo1.jpg"
import { Link } from "react-router-dom"
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import './CreateUserForm.css'

const CreateUserForm = () => {

    const navigate = useNavigate();
    const [inputs, setInputs] = useState({});
    const BarRef = useRef(null);
    const EmplRef = useRef(null);
    const nomRef = useRef(null);
    const preRef = useRef(null);
    const conRef = useRef(null);
    const [Label, setLabel] = useState();
    const [msg,setMsg] = useState();
    
    const handlechange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInputs(values => ({ ...values, [name]: value }));
    }
    const handlesubmit = (e) => {
        e.preventDefault();
        console.log(inputs);
        if (inputs['newPassword'] === inputs['confirmedPassword']) {
            axios.post('http://localhost/api/createUser.php', inputs).then(function (response) {
            console.log( response.data.status);
            if (response.data.status === 1) {
                navigate('/User/CreateUser');
                BarRef.current.value = '';
                EmplRef.current.value = '';
                conRef.current.value = '';
                nomRef.current.value = '';
                preRef.current.value = '';
                nomRef.current.focus();
                setMsg('le nouveau utilisateur bien ajouter!');
                setLabel('effectuer_class')
                setInputs();
            } else {
                setMsg('ce utilsateur deja exister');
                setLabel('erreur_class');
            }
            
            
        });
        } else {
            setMsg('le mot de passe est different');
            setLabel('erreur_class');
        }
      
    }
    return (
        <div>
            <section>
                <form onSubmit={handlesubmit}>
                    <div className='saved_part'>
                    <div className='btn_enreg'>
                            <Link id='link_image'  className='link_logo' to={"/"}><img id='image_link' className='logo_enr' src={bottuLogo} alt='bottuLogo' /><br /></Link>
                           
                            <p className={Label}>{msg}</p>
                            <div className='small'>
                                <input type="text" className='enregister_btn ' id='small_box1' ref={nomRef} name='Nom'  placeholder='Nom' onChange={handlechange} required/>
                    <input type="text" className='enregister_btn ' id='small_box2' name='Prenom' ref={preRef} placeholder='Prenom' onChange={handlechange} required/><br/>
                        </div><br/>
                    <input type="text" className='enregister_btn ' name='newUser' ref={BarRef} placeholder='Username' onChange={handlechange} required/><br/>
                    <input type="password" className='enregister_btn' name='newPassword' ref={EmplRef} placeholder='Password'  onChange={handlechange} required/><br />
                    <input type="password" className='enregister_btn' name='confirmedPassword' ref={conRef} placeholder='Confirm Password'  onChange={handlechange} required/><br />
                    <button className='submit_btn'>Enregister</button>
                    </div><br />
                    <div className='Label_user'>
                    <p>Your Health,<br/><span> Our Mission</span>.</p>        
                    </div>    
                    </div>
                </form>
            </section>
        </div>
    );
};

export default CreateUserForm;