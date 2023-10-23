import {useState,useEffect,Component} from 'react';
import axios from 'axios';
import './style.css';
const Details=()=>{
  const[users,setUsers]=useState([]);
  useEffect(() => {
    axios.get('https://dummyjson.com/users')
      .then(response => {
        setUsers(response.data.users);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
      console.log(users)
  }, []);

return(
    <div id="main">
        <h1>Dummy data</h1>
        <div id="main1">
        <table>
            <thead>
            <tr>
                <th>Sno</th>
                <th>Profile Pic</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Gender</th>
                <th>E-mail</th>
                <th>Username</th>
                <th>Domain</th>
                <th>IP</th>
                <th>University</th>
            </tr>
            </thead>
            <tbody>
                {
                    users.map(user=>(
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td><img src={user.image} alt={user.firstName}/></td>
                        <td>{user.firstName}</td>
                        <td>{user.lastName}</td>
                        <td>{user.gender}</td>
                        <td>{user.email}</td>
                        <td>{user.username}</td>
                        <td>{user.domain}</td>
                        <td>{user.ip}</td>
                        <td>{user.university}</td>
                    </tr>
                    ))
                }
            </tbody>
        </table>
        </div>
    </div>

)
}
export default Details;
