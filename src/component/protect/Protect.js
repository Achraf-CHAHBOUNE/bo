import React from 'react';
import { useEffect } from 'react';
import {  useNavigate } from 'react-router-dom';
const Protect = (props) => {
    const navigate = useNavigate();
    const  component  = props.component;
    useEffect(function () {
        let login = localStorage.getItem("login");
        console.log(login);
        if (!login) {
            localStorage.setItem("loginStatus", "please login to view the Home page");
            navigate("/SignIn", { replace: true });
        }
    }, []);




        
        // setTimeout(function () {
          

        // }, 5000);
   


    return (
        <div>
            {component}
        </div>
    );
};

export default Protect;