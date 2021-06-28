import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const DetailProduct = () => {
  const [products, setUser] = useState({
    title: "",
    image: "",
    description: "",  
    price: "",
    category:"",
  });
  const { id } = useParams();
  useEffect(() => {
    loadProducts();
  
  }, []);
  const loadProducts = async () => {
    const res = await axios.get(`http://localhost:3003/products/${id}`);
    setUser(res.data);
  };
  return (
    <div className="container py-4">
      <Link className="btn btn-primary" to="/">
        back to Home
      </Link>
      <h1 className="display-4">Product Id: {id}</h1>
      
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item">Product title: {products.title}</li>
        
        <li className="list-group-item">Product name: {products.image}</li>
        <li className="list-group-item">Product description: {products.description}</li>
        <li className="list-group-item">Product price: {products.price}</li>
        <li className="list-group-item">Product  category: {products.category}</li>
      </ul>
    </div>
  );
};

export default DetailProduct;
