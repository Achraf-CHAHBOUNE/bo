import React from 'react';
import Navbar from '../../Header/Navbar/Navbar';
import SingInForm from "./SingInForm/SingInForm";

const SignIn = () => {

    return (
        <div>
            <Navbar path={["/", "/Enregistrer", "/Liberer", "/Localiser"]} titre={["Home", "Enregister", "Liberer", "Localiser"]} />
            <SingInForm/>
        </div>
    );
};

export default SignIn;