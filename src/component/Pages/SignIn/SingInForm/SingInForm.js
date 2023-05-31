import React from 'react';
import "./SingInForm.css"
import bottuLogo from "../../../Assets/image/logo1.jpg"
import { Link } from "react-router-dom"
import { useState,useEffect } from 'react';


const EnregistrerForm = () => {
    const [user,setUser] = useState("");
    const [pass,setPass] = useState("");
    const [error,setError] = useState("");
    const [msg,setMsg] = useState("");
    
    useEffect(() => {
        let login = localStorage.getItem("login");
        let loginStatus = localStorage.getItem("loginStatus");
        if (loginStatus) {
            setError(loginStatus);
            setTimeout(function () {
                localStorage.clear();
                window.location.reload();
            })
        }
        setTimeout(function () {
            setMsg("");
        }, 5000);
    }, [msg]);

    const handlechange = (e,type) => {
        switch (type) {
         case "user":
                setError("");
                setUser(e.target.value);
                if (e.target.value === "") {
                    setError("Username has left blank");
                }
                break; 
         case "pass":
                setError("");
                setPass(e.target.value);
                if (e.target.value === "") {
                    setError("Password has left blank");
                } break;
            default:
        }
    
    }
    const handlesubmit = (e) => {
        e.preventDefault();
        if (user !== "" && pass !== "") {
            var url = "http://localhost/api/login1.php";
            var headers = {
                "Accept": "application/json",
                "Content-Type": "application/json"
            };
            var data = {
                "user": user,
                "pass": pass
            };
            fetch(url, {
  method: "POST",
  headers: headers,
  body: JSON.stringify(data)
})
  .then((response) => response.json())
  .then((response) => {
    console.log(response.isAdmin);
    if (
      response.result === "Invalid username!" || response.result === "Invalid password!" || response.result === "Username not found."
    ) {
      setError(response.result);
    } else {
        setMsg(response.result);
        localStorage.setItem("profile", user);
    if (response.isAdmin === 1) {
        localStorage.setItem("admin", "true");
    } else {
        localStorage.setItem("admin", "false");
    }

      setTimeout(function () {
        localStorage.setItem("login", "true");
        window.location.href = "/"; // Navigate to the appropriate route
      }, 3000);
    }
  })
  .catch((err) => {
    setError(err.message);
    console.log(err.message);
  });

        } else {
            if (user === "") {
                setError("the Username field is empty ...");
            }
            else if (pass === "") {
                setError("the Password field is empty ...");
            } else {
                setError("the fiels are empty ...");
            }
        }
    };
    console.log(msg);
    console.log(error);
    console.log(localStorage.getItem("admin"));

    return(
        <div>
            <section>
                <form onSubmit={handlesubmit}>
                    <div className='save_part'>
                    <div className='btn_enreg'>
                            <Link className='link_logo' to={"/"}><img className='logo_enr' src={bottuLogo} alt='bottuLogo' /><br /></Link>
                            <p className='p_error'>
                                {
                                    error !== "" ?
                                        <span className='error'>{error}</span>:
                                        <span className='success'>{msg}</span>
                                }
                    </p><br/>  
                    <input type="text" className='enregister_btn' name='user' placeholder='username' onChange={(e)=> handlechange(e,"user")}/><br/>
                    <input type="password" className='enregister_btn' name='pass' placeholder='password' onChange={(e)=> handlechange(e,"pass")}/><br />
                    <button className='submit_btn'>Enregister</button>
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

export default EnregistrerForm;