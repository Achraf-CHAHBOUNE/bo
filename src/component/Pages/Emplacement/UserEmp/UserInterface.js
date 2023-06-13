import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './UserInterface.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import '@fortawesome/fontawesome-free/css/all.min.css';



const User = () => {
    const [profiles, setProfiles] = useState([]);
    const navigator = useNavigate()

    useEffect(() => {
        getUsers();
    }, []);

    function getUsers() {
            axios.get("http://localhost/api/Emplacement.php").then((res) => {
                console.log(res.data);
                setProfiles(res.data);
        })
            .catch(err => {
            console.error(err); 
        })
    }
    const DeleteUser = (userId) =>{
        console.log(userId);
        axios.delete(`http://localhost/api/user/${userId}/delete`).then(res => {
            console.log(res);
            getUsers();
            
        })
        .catch(err => {
            console.error(err); 
        })
    }
    const addNew = () => {
        navigator('/User/CreateUser')
    }

    const handleSearch = (e) => {
        const value = { search: e.target.value };
        
    axios.post("http://localhost/api/search.php", value).then(res => {
    console.log(res.data);
        
        if (value.search !== "") {
        const jsonStartIndex = res.data.indexOf("[");
      const jsonEndIndex = res.data.lastIndexOf("]");
      const jsonData = res.data.substring(jsonStartIndex, jsonEndIndex + 1);
      const responseData = JSON.parse(jsonData);
      console.log(responseData);
      setProfiles(responseData);
        } else {
            getUsers();
     }
    })
    .catch(err => {
      console.log(err);
    });
};



    return ( 
        <div className='upper_table'>
            <h1 className='profTitle'>La liste du Emplacements</h1><br />
            <div className='table_scrol'>
                <input className='cherche_user' type='text' placeholder='chercher ' onChange={handleSearch}/>
                <button className='add_btn' onClick={addNew}><span className='add' >Add</span><strong className='plus'>+</strong></button>
            <table>
                <thead>
                    <tr className='thead'>
                        <th className='order'>order</th>
                        <th className='first_column'>user</th>
                        <th className='second_column'>password</th>
                        <th  className="wide-column" ><span className='action'>Action</span></th>
                        
                    </tr>
                </thead>
                <tbody>
                   {profiles.map((profile, key) => (
  <tr key={key}>
    <td className='order'>{key+1}</td>
    <td className='first_column'>{profile.username}</td>
    <td className='second_column'>{profile.passwords}</td>
                           <td className="wide-column" >
                               
            <Link className='link' to={`/User/EditUser/${profile.username}`}><span className='lab'>Edit </span><i className="fas fa-edit"></i></Link>
            <button  onClick={()=> DeleteUser(profile.username)}><span className='lab'>Delete </span> <i class="fas fa-trash-alt"></i></button>                
                           </td>
  </tr>
))}
                </tbody>
            </table>
        </div>
        </div>
                  
    );
};

export default User;