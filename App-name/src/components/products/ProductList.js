import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// import { Link, NavLink } from "react-router-dom";
const ProducList = () => {
  const [products, setUser] = useState([]);

  useEffect(() => {
    loadProducts();
  }, []);
  const loader = document.querySelector('#preloader');
  const loadProducts = async () => {
    loader.style.opacity = "1";
    const result = await axios.get("http://localhost:3003/products");
    setUser(result.data.reverse());
    console.log(result);
    loader.style.opacity = "0";
  };

  const deleteProducts = async id => {
  await axios.delete(`http://localhost:3003/products/${id}`);
  loadProducts();
  };

  return (

    <div className="container">
       
       <div className="py-4">
         <h1>List Products</h1>
         <table class="table border shadow "  >
           <thead class="thead-dark">
             <tr>
               <th scope="col">#</th>
               <th scope="col">title</th>
               <th scope="col">image</th>
               <th scope="col">description</th>
               <th scope="col">price</th>
               <th scope="col">category</th>
             
               <th>Action</th>
               <Link className="btn btn-outline-light" to={"/Products/add"}>Add Product</Link>
             </tr>
           </thead>
           <tbody>
             {products.map((product, index) => (
               <tr>
                 <th scope="row">{index +1}</th>
                 <td>{product.title}</td>
                 <td>{product.image}</td>
                 <td>{product.description}</td>
                 <td>{product.price}</td>
                 <td>{product.category}</td>
                 <td>
                   <Link class="btn btn-primary mr-2" to={`/products/${product.id}`}>
                     View
                   </Link>
                   </td>
                   <td>
                   <Link
                     class="btn btn-outline-primary mr-2"
                     to={`/products/edit/${product.id}`}
                   >
                     Edit
                   </Link>
                   </td>
                   <td>
                   <Link
                     class="btn btn-danger"
                     onClick={() => deleteProducts(product.id)}
                   >
                     Delete
                   </Link>
                 </td>
               </tr>
             ))}
           </tbody>
         </table>
       </div>
     </div>
    ////////////////

  );
};

export default ProducList;