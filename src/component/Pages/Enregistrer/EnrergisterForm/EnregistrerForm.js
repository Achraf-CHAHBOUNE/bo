import React, { useRef ,useState} from 'react';
import "./EnregisterForm.css"
import bottuLogo from "../../../Assets/image/logo1.jpg"
import { Link } from "react-router-dom"
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarcode } from '@fortawesome/free-solid-svg-icons';
import Scanner from "../../Scanner/Scanners"

const EnregistrerForm = () => {

    const navigate = useNavigate();
    const [inputs, setInputs] = useState({});
    const BarRef = useRef();
    const EmplRef = useRef();
    const [Label, setLabel] = useState();
    const [msg, setMsg] = useState();
    const [showScanner, setShowScanner] = useState();
    const [appear, setAppear] = useState();
    const whoRef = useRef();

    
console.log(BarRef)
    
 const [scannerKey, setScannerKey] = useState(1); // Initial key value

    
    
const restartScanner = () => {
    setScannerKey(prevKey => prevKey + 1); // Increment the key value
    };
    const handleBar = (bar) => {
        console.log("this onbar :",bar)
        if (whoRef.current) {
        BarRef.current.value=bar
        } else {
            EmplRef.current.value=bar
        }
}

    const handlechange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInputs(values => ({ ...values, [name]: value }));
    }

    const handlesubmit = (e) => {
        e.preventDefault();
        console.log(inputs);
        const variable ={barcode:BarRef.current.value,placement:EmplRef.current.value,profile:localStorage.getItem("profile")}
        console.log(variable);
        console.log(inputs);
        
        axios.post('http://localhost/api/user/save', variable).then(function (response) {
            console.log( response.data.status);
            if (response.data.status === 1) {
                navigate('/Enregistrer');
                BarRef.current.value = '';
                EmplRef.current.value = '';
                BarRef.current.focus();
                setMsg(response.data.message);
                setLabel('effectuer_class')
                setInputs();
            } else {
                setMsg(response.data.message);
                setLabel('erreur_class');
            }
            
            
        });
      
    }
    
    return (
        <div>
            <section style={{display:appear}}>
                <form onSubmit={handlesubmit}>
                    <div id='enrgister_form' className='save_part'>
                    <div className='btn_enreg'>
                            <Link  className='link_logo' to={"/"}><img className='logo_enr' src={bottuLogo} alt='bottuLogo' /><br /></Link>
                            <p className={Label}>{msg}</p>
                            <div className='scannerdiv'>
                                <input type="text" className='enregister_btn' name='barcode' ref={BarRef} placeholder='entrer le code produit' onChange={handlechange} /><br />
                                <p className="scanbtn" onClick={() => { setShowScanner(true); whoRef.current = true; setAppear("none")}}><FontAwesomeIcon icon={faBarcode} /></p>
                            </div><br />
                            <div className='scannerdiv'>
                            <input type="text" className='enregister_btn' name='placement' ref={EmplRef} placeholder='entrer emplacement'  onChange={handlechange}/><br />
                                <p className="scanbtn" onClick={() => { setShowScanner(true); whoRef.current = false; setAppear("none");}}><FontAwesomeIcon icon={faBarcode} /></p>
                            </div><br />
                    <button id='enregister_submit' className='submit_btn' onClick={()=>setTimeout(() => {window.location.reload()}, 1000)}>Enregister</button>
                    </div><br />
                    <div className='Label_enr'>
                    <p>Your Health,<br/><span> Our Mission</span>.</p>        
                    </div>    
                    </div>
                </form>
            </section>
            <div>
               {showScanner ? (
    <>
      <Scanner key={scannerKey} onbar={handleBar} />
                        <button onClick={() => { setShowScanner(false); restartScanner(); setAppear("block"); }}>Stop</button>
    </>
  ) : (
    <label></label>
  )}            
        </div>       
        
        </div>
    );
};

export default EnregistrerForm;