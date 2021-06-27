import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
class Headers extends Component {
  render() {
    return (
      <div className="header">
        <div className="container">
          <div className="row">
            <div className="col-md-2 col-sm-2">
              <div className="logo"><a href="index.html"><img src="images/logo.png" alt="FlatShop" /></a></div>
            </div>
            <div className="col-md-10 col-sm-10">
              <div className="header_top">
                <div className="row">
                  <div className="col-md-3">
                    <ul className="option_nav">
                      <li className="dorpdown">
                        <a href="#">Eng</a>
                        <ul className="subnav">
                          <li><a href="#">Eng</a></li>
                          <li><a href="#">Vns</a></li>
                          <li><a href="#">Fer</a></li>
                          <li><a href="#">Gem</a></li>
                        </ul>
                      </li>
                      <li className="dorpdown">
                        <a href="#">USD</a>
                        <ul className="subnav">
                          <li><a href="#">USD</a></li>
                          <li><a href="#">UKD</a></li>
                          <li><a href="#">FER</a></li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <ul className="topmenu">
                      <li><a href="#">About Us</a></li>
                      <li><a href="#">News</a></li>
                      <li><a href="#">Service</a></li>
                      <li><a href="#">Recruiment</a></li>
                      <li><a href="#">Media</a></li>
                      <li><a href="#">Support</a></li>
                    </ul>
                  </div>
                  <div className="col-md-3">
                    <ul className="usermenu">
                      <li><a href="checkout.html" className="log">Login</a></li>
                      <li><a href="checkout2.html" className="reg">Register</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="clearfix" />
              <div className="header_bottom">
                <ul className="option">
                  <li id="search" className="search">
                    <form><input className="search-submit" type="submit" defaultValue /><input className="search-input" placeholder="Enter your search term..." type="text" defaultValue name="search" /></form>
                  </li>
                  <li className="option-cart">
                    <a href="#" className="cart-icon">cart <span className="cart_no">02</span></a>
                    <ul className="option-cart-item">
                      <li>
                        <div className="cart-item">
                          <div className="image"><img src="images/products/thum/products-01.png" alt="" /></div>
                          <div className="item-description">
                            <p className="name">Lincoln chair</p>
                            <p>Size: <span className="light-red">One size</span><br />Quantity: <span className="light-red">01</span></p>
                          </div>
                          <div className="right">
                            <p className="price">$30.00</p>
                            <a href="#" className="remove"><img src="images/remove.png" alt="remove" /></a>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="cart-item">
                          <div className="image"><img src="images/products/thum/products-02.png" alt="" /></div>
                          <div className="item-description">
                            <p className="name">Lincoln chair</p>
                            <p>Size: <span className="light-red">One size</span><br />Quantity: <span className="light-red">01</span></p>
                          </div>
                          <div className="right">
                            <p className="price">$30.00</p>
                            <a href="#" className="remove"><img src="images/remove.png" alt="remove" /></a>
                          </div>
                        </div>
                      </li>
                      <li><span className="total">Total <strong>$60.00</strong></span><button className="checkout" onclick="location.href='checkout.html'">CheckOut</button></li>
                    </ul>
                  </li>
                </ul>
                <div className="navbar-header"><button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse"><span className="sr-only">Toggle navigation</span><span className="icon-bar" /><span className="icon-bar" /><span className="icon-bar" /></button></div>
                <div className="navbar-collapse collapse">
                  <ul className="nav navbar-nav">
                    <li className="active dropdown">
                      <a href="#" className="dropdown-toggle" data-toggle="dropdown">Home</a>
                      <div className="dropdown-menu">
                    
                        <ul className="mega-menu-links">
                        
                          <li>
                            <Link to="/">Home</Link>
                          </li>
                          <li>
                            <Link to="/Contact">Contact</Link>
                          </li>
                          
           
                          <li>
                            <Link to="/ProductList">ProductList</Link>
                          </li>
                         
                        

                        </ul>
                       
                      </div>
                    </li>
                    <li>
                            <Link to="/CheckOut2">CheckOut2</Link>
                      </li>
                      <li>
                            <Link to="/cart">Cart</Link>
                      </li>
                    <li className="dropdown">
                      <a href="#" className="dropdown-toggle" data-toggle="dropdown">Fashion</a>
                      <div className="dropdown-menu mega-menu">
                        <div className="row">
                          <div className="col-md-6 col-sm-6">
                            <ul className="mega-menu-links">
                              <li><a href="productgird.html">New Collection</a></li>
                              <li><a href="productgird.html">Shirts &amp; tops</a></li>
                              <li><a href="productgird.html">Laptop &amp; Brie</a></li>
                              <li><a href="productgird.html">Dresses</a></li>
                              <li><a href="productgird.html">Blazers &amp; Jackets</a></li>
                              <li><a href="productgird.html">Shoulder Bags</a></li>
                            </ul>
                          </div>
                          <div className="col-md-6 col-sm-6">
                            <ul className="mega-menu-links">
                              <li><a href="productgird.html">New Collection</a></li>
                              <li><a href="productgird.html">Shirts &amp; tops</a></li>
                              <li><a href="productgird.html">Laptop &amp; Brie</a></li>
                              <li><a href="productgird.html">Dresses</a></li>
                              <li><a href="productgird.html">Blazers &amp; Jackets</a></li>
                              <li><a href="productgird.html">Shoulder Bags</a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li><a href="productgird.html">gift</a></li>
                    <li><a href="productgird.html">kids</a></li>
                    <li><a href="productgird.html">blog</a></li>
                    <li><a href="productgird.html">jewelry</a></li>
                    <li>
                            <Link to="/Contact">ContactUs</Link>
                          </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default Headers;