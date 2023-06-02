import React from 'react';
import Navbar from '../../Header/Navbar/Navbar';
import LocaliserForm from './Localiser/LocaliserForm';
import Show from '../../Container/Show/Show'
const Localiser = () => {
    return (
        <div>
        <Navbar path={["/Bproject","/Bproject/Enregistrer","/Bproject/Liberer","/Bproject/Localiser"]} titre={["Home","Enregister","Liberer","Localiser"] }  /> 
        <LocaliserForm />
        <Show/>
        </div>
    );
};

export default Localiser;