import React from 'react';
import Navbar from "../../Header/Navbar/Navbar.js"
import EnregistrerForm from './EnrergisterForm/EnregistrerForm.js';
import Show from "../../Container/Show/Show.js"
const Enregister = () => {
    return (
        <div>
            <Navbar path={["/", "/SignIn", "/Liberer", "/Localiser"]} titre={["Home", "Connexion", "Liberer", "Localiser"]} />
            <EnregistrerForm />
            <Show/>
        </div>
    );
};

export default Enregister;