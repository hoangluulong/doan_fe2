import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import ListUser from "./components/pages/ListUser";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Home from "./components/pages/Home";
import Cart from "./components/cart/Cart";

import {
  BrowserRouter as Router,  
  Route,
  Switch,
  withRouter
} from "react-router-dom";
import NotFound from "./components/pages/NotFound";
import AddUser from "./components/users/AddUser";
import EditUser from "./components/users/EditUser";
import User from "./components/users/User";
import ProducList from "./components/products/ProductList";
import AddProducts from "./components/products/AddProducts";
import EditProduct from "./components/products/EditProduct";
import DetailProduct from "./components/products/DetailProduct";
function App(props) {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/listuser" component={ListUser} />
        
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/users/add" component={AddUser} />
          <Route exact path="/users/edit/:id" component={EditUser} />
          <Route exact path="/users/:id" component={User} />
          
        {/* product */}
        <Route exact path="/productlist" component={ProducList} />
        <Route exact path="/products/add" component={AddProducts} />
          <Route exact path="/products/edit/:id" component={EditProduct} />
          <Route exact path="/products/:id" component={DetailProduct} />


          {/* page found */}
          <Route component={NotFound} />
        </Switch>
        </div>

    </Router>
  );
}

export default App;
