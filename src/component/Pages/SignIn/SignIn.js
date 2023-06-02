import React from 'react';
import Navbar from '../../Header/Navbar/Navbar';
import SingInForm from "./SingInForm/SingInForm";

const SignIn = () => {

    return (
        <div>
            <Navbar path={["/Bproject","/Bproject/Enregistrer","/Bproject/Liberer","/Bproject/Localiser"]} titre={["Home","Enregister","Liberer","Localiser"] } />
            <SingInForm/>
        </div>
    );
};

export default SignIn;