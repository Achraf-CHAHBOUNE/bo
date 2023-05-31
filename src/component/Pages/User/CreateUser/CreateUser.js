import React from 'react';
import Navbar from "../../../Header/Navbar/Navbar.js"
import CreateUserForm from './CreateUserForm/CreateUserForm.js';
import Show from "../../../Container/Show/Show.js"
const Enregister = () => {
    return (
        <div>
            <Navbar path={["/", "/SignIn", "/Liberer", "/Localiser"]} titre={["Home", "Connexion", "Liberer", "Localiser"]} />
            <CreateUserForm/>
            <Show/>
        </div>
    );
};

export default Enregister;