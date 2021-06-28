import React, { useState, useEffect } from "react";
import axios from "axios";
import Products from "../products/Product";
import Cart from "../cart/Cart";
import { Link } from "react-router-dom";
// import { Link, NavLink } from "react-router-dom";
const Home = () => {

    return (
        <div>
            <div className="container">
                <div className="content">
                    <div className="main">
                        <Products></Products>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Home;