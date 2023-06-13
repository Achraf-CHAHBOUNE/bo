import React from 'react';
import Navbar from "../../Header/Navbar/Navbar.js"
import UserInterface from './UserInterface/UserInterface.js';
import Show from "../../Container/Show/Show.js"

const Enregister = () => {
    return (
        <div>
            <Navbar path={["/Bproject","/Bproject/Enregistrer","/Bproject/Liberer","/Bproject/Localiser"]} titre={["Home","Enregister","Liberer","Localiser"] } />
            <UserInterface />
            <Show/>
        </div>
    );
};

export default Enregister;