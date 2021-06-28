import React, { useState,useEffect } from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";

const Login = () => {
  let history = useHistory();
  const [userlogin, setUserlogin] = useState({
    username: "",
    password:"",
  });
const loadUsers = async () => {
    const result = await axios.get("http://localhost:3003/users");
    setUser(result.data.reverse());
    // console.log(result);
  };

    const [users, setUser] = useState([]);
  
    useEffect(() => {
      loadUsers();
    }, []);

const {username, password} = userlogin;
  const onInputChange = e => {
    setUserlogin({ ...userlogin, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    for(let i = 0;i < users.length; i++){
        if(users[i].username == username && users[i].password == password){
            await axios.post("http://localhost:3003/login", userlogin);
            history.push('/');
            console.log(username);
            }
    }
      
    
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Login</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Username"
              name="username"
              value={username}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control form-control-lg"
              placeholder="Enter Your Password"
              name="password"
              value={password}
              onChange={e => onInputChange(e)}
            />
          </div>
          <button className="btn btn-primary btn-block">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;