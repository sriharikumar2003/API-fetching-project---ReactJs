import './App.css';
import {useEffect, useState} from 'react'
import React from 'react';


function App() {
  const [Users,setUsers] = useState([]);
  const [loading,setLoading] = useState(true);

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data =>{
      setUsers(data);//fetching data from the users
      setLoading(false);// initially it should be empty
    });
  },[]);

  if(loading){
    return <p>loading</p>;
  }
  return (
    <div className="App">
      <h1>Users and their IDs</h1>
      <ul>
        {Users.map(user => (
          <React.Fragment key={user.id}>
             <li className='id'><b>ID:</b> {user.id}</li>
            <li className='name'><b>Name:</b> {user.name}</li>
            <li>--------------------------------------------------------------------</li>
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
} 

export default App;
