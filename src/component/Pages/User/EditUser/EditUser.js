import React from 'react';
import Navbar from "../../../Header/Navbar/Navbar.js"
import EditUserForm from './EditUserForm/EditUserForm.js';
import Show from "../../../Container/Show/Show.js"
const EditUser = () => {
    return (
        <div>
            <Navbar path={["/", "/SignIn", "/Liberer", "/Localiser"]} titre={["Home", "Connexion", "Liberer", "Localiser"]} />
            <EditUserForm />
            <Show/>
        </div>
    );
};

export default EditUser;