import React, { useState } from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";

// aaaaaaaaaaaaaaaaaaaaa


// 
const AddProducts = () => {
  let history = useHistory();
  const [products, setproduct] = useState({
    title: "",
    image: "",
    description: "",
    price: "",
    category: "",
  });
  

  const { title, image, description, price, category } = products;
  const onInputChange = e => {
    setproduct({ ...products, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    await axios.post("http://localhost:3003/products", products);
    history.push("/");
  };
  
  return (
    <div className="container">
      <div className="form-add">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add A Products</h2>
        <form onSubmit={e => onSubmit(e)}>

          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter image Products"
              name="title"
              value={title}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="file" multipart 
              className="form-control form-control-lg"
              placeholder="Enter image Products"
              name="image"
              value={image}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter description products"
              name="description"
              value={description}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your price"
              name="price"
              value={price}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your category"
              name="category"
              value={category}
              onChange={e => onInputChange(e)}
            />
          </div>

          <button className="btn btn-primary btn-block">Add products</button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default AddProducts;
