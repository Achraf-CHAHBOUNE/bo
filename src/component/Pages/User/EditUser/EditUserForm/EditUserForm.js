import React, { useRef ,useState,useEffect} from 'react';
import "./EditUserForm.css"
import bottuLogo from "../../../../Assets/image/logo1.jpg"
import { Link } from "react-router-dom"
import axios from "axios";
import { useNavigate ,useParams } from 'react-router-dom';

const EditUserForm = () => {

    const navigate = useNavigate();
    const BarRef = useRef(null);
    const EmplRef = useRef(null);
    const [Label, setLabel] = useState();
    const [msg, setMsg] = useState();
    const { username } = useParams();


    
    
    useEffect(() => {
        getUser();
    }, []);

    function getUser() {
            axios.get(`http://localhost/api/users/${username}`).then((res) => {
                console.log(res.data);
                BarRef.current.value = username;
                BarRef.current.focus();
                EmplRef.current.value = '';

        })
            .catch(err => {
            console.error(err); 
        })
    }
    
 
    const handlesubmit = (e) => {
        const variable = {username: username, newuser:BarRef.current.value,newpass:EmplRef.current.value}
        e.preventDefault();
        console.log(variable);
        axios.put(`http://localhost/api/user/${username}/Edit`,variable).then(function (response) {
            console.log( response.data.status);
            if (response.data.status === 1) {
                setMsg('Ce Mise a jour est bien effectuer!');
                setLabel('effectuer_class')
                setTimeout(() => {
                    navigate('/User');
                } ,1000)
            } else {
                navigate(`/User/EditUser/${username}`);
                BarRef.current.value = username;
                EmplRef.current.value = '';
                BarRef.current.focus();
                setMsg('Ce Mise a jour est declencher');
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
                    <input type="text"  className='enregister_btn' name='newuser' ref={BarRef} placeholder='New username' /><br/>
                    <input type="text" className='enregister_btn' name='newpass' ref={EmplRef} placeholder='New password'  /><br />
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

export default EditUserForm;