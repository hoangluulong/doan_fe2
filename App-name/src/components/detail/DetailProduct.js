import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useHistory, useParams } from "react-router-dom";

const DetailProduct = () => {
    const [usersLogin, setUserlogin] = useState([]);
    const [likeProduct, setLikeProduct] = useState([]);
    const [products, setProduct] = useState({
        id: "",
        title: "",
        image: "",
        description: "",
        price: "",
        category: [],
        like: 0
    });

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:3003/login");
        setUserlogin(result.data.reverse());
        console.log(result);
    };

    const { id, user_id } = useParams();
    useEffect(() => {
        loadProduct();
        loadUsers();
    }, []);

    const loadProduct = async () => {
        const res = await axios.get(`http://localhost:3003/products/${id}`);
        setProduct(res.data);
        
    };

    const productLike = async () => {
        setProduct({ ...products , like: products.like + 1})
        await axios.put(`http://localhost:3003/products/${id}`, products);
    };

    return (
        <div>
            <div className="single-item">
                <div className="left-set">
                    <img src={products.image} alt={products.title} width={200} height={500} alt=""/>
                </div>
                <div className="right-set">
                    <div className="name">{products.title}</div>
                    <div className="price">{products.price}</div>
                    <div className="description">
                        <p>
                            {products.description}
                        </p>
                    </div>
                    
                    <button>ADD TO CART</button>
                    <br></br>
                    <br></br>
                    <div className="like">Like: {products.like}
                        <div className="like-btn">
                            <button id="btnLike" onClick={() => productLike()}>Like</button>)
                          </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default DetailProduct;