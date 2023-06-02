import React from 'react';
import Navbar from '../../Header/Navbar/Navbar';
import LibererForm from './LibererForm/LibererForm'
import Show from '../../Container/Show/Show';

const Liberer = () => {
    return (
        <div>
        <Navbar path={["/","/Enregistrer","/Liberer","/Localiser"]} titre={["Home","Enregister","Liberer","Localiser"] } />
        <LibererForm />
        <Show/>
        </div>
    );
};

export default Liberer;