import React, { Component } from 'react';
import data from "../cart/data.json";
import Products from "../products/Product";
import Cart from '../cart/Cart';
import { Link, NavLink } from "react-router-dom";

class Home extends Component {
    constructor() {
        super();
        this.state = {
            products: data.products,
            cartItems: [],
            size: "",
            sort: "",
        };
    }

    removeCart(product) {
        const cartItems = this.state.cartItems.slice();
        alert("aaaaa");
        this.setState({
            cartItems: cartItems.filter((x) => x._id == product._id),
        });
    };

    addToCart = (product) => {
        const cartItems = this.state.cartItems.slice();
        let alreadyInCart = false;
        cartItems.forEach(item => {
            if (item._id === product._id) {
                item.count++;
                console.log("count: " + item._id);
                alreadyInCart = true;
            }
        });
        if (!alreadyInCart) {
            cartItems.push({ ...product, count: 1 })
        }
        this.setState({ cartItems })
    };

    render() {
        return (
            <div>
                <Cart cartCartItem={this.state.cartItems} removeCart={this.removeCart}></Cart>
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
                        <Link className="btn btn-outline-light" to="/productlist">List user</Link>
                        <Link className="btn btn-outline-light" to="/listuser">List user</Link>
                        <Link className="btn btn-outline-light" to="/users/add">Add User</Link>
                        <button className="btn btn-outline-light" onClick={shoot}> Cart ({this.state.cartItems.length})</button>

                    </div>
                </nav>
                </div>

                <div className="container">
                    <div className="content">
                        <div className="main">
                            <Products product={this.state.products} addToCart={this.addToCart}></Products>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default Home;

function shoot() {
    const tableCard = document.querySelector(".table-cart");
    tableCard.style.zIndex = "99999";
    tableCard.style.opacity = "2";
}