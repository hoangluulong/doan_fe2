import { Link, NavLink } from "react-router-dom";
import React, { Component,useState, useEffect } from 'react';
import axios from "axios";
import { useHistory } from "react-router-dom";
const Navbar = () => {
  let history = useHistory();
  const [usersLogin, setUserlogin] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3003/login");
    setUserlogin(result.data.reverse());
    console.log(result);

  };

  const deleteUser = async id => {
      await axios.delete(`http://localhost:3003/login/${id}`);
      loadUsers();
      history.push("/login");
    };
  return (
    <div className="header_croll">
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link className="navbar-brand" href="/">
          Recat User
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/contact">
                Contact
              </NavLink>
            </li>
            <li className="nav-item">

            </li>
          </ul>
        </div>
        {/* <button className="bntlist">Cart</button> */}
        <Link className="bntlist" to="/listuser">List user</Link>
        <Link className="bntlist" to="/users/add">Add User</Link>
        <Link className="bntlist" to="/listcart">List Cart</Link>
        <Link className="bntlist" to="/productlist">List Product</Link>
        <Link className="bntlist" to="/products/add">Add Product</Link>
     
        {usersLogin.length === 0? (<span><Link className="btn btn-outline-light" to="/login">Login</Link><Link className="btn btn-outline-light" to="/sigup">Signup</Link></span> ):
                        
                         <ul>
                              <h5>{usersLogin[0].username}</h5>
                              <Link  className="btn btn-outline-light" onClick={() => deleteUser(usersLogin[0].id)}>  Logout </Link>
                            
                         </ul>
                       }
      </div>
    </nav>
    </div>
  );
};

export default Navbar;

// function shoot() {
//   const tableCard = document.querySelector(".table-cart");
//   tableCard.style.zIndex = "99999";
//   tableCard.style.opacity = "2";
// }
