
import React from 'react';
import "./LibererForm.css"
import bottuLogo from "../../../Assets/image/logo1.jpg"
import {Link} from "react-router-dom"

const LibererForm = () => {
    return (
        <div>
            <section>
                <form>
                    <div className='save_part'>
                    <div className='btn_enreg'>
                            <Link className='link_logo' to={"/"}><img className='logo_enr' src={bottuLogo} alt='bottuLogo'/><br/></Link>
                    <input type="text" className='enregister_btn' placeholder='entrer le code produit'/><br/>
                    <input type="submit" className='submitlib_btn' value="Liberer Emplacement"/>
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

export default LibererForm;