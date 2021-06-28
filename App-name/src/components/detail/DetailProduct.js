import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useHistory, useParams } from "react-router-dom";

const DetailProduct = () => {
    const [products, setProduct] = useState({
        id: "",
        title: "",
        image: "",
        description: "",
        price: "",
        category: []
    });
    const { id } = useParams();
    useEffect(() => {
        loadProduct();
    }, []);
    const loadProduct = async () => {
        const res = await axios.get(`http://localhost:3003/products/${id}`);
        setProduct(res.data);
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
                </div>
            </div>
        </div>
    );

}
export default DetailProduct;