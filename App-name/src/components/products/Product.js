import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useHistory, useParams } from "react-router-dom";

const Product = () => {
    const [products, setProduct] = useState([]);
    const [carts, setCarts] = useState([]);
    let history = useHistory();
    useEffect(() => {
        loadProducts();
        loadCarts();
    }, []);

    const loadProducts = async () => {
        const result = await axios.get("http://localhost:3003/products");
        setProduct(result.data.reverse());
        console.log(result);
    };

    const loadCarts = async () => {
        const result = await axios.get("http://localhost:3003/carts");
        setCarts(result.data.reverse());
        console.log(result);
    };

    const addToCart = async (product) => {
        await axios.post("http://localhost:3003/carts", product);
        loadCarts();
        history.push("/");
    };

    return (
        <div>
            <div class="pyro"><div class="before"></div><div class="after"></div></div>
            <div className="slide-long">
                <div className="hinh1"><img src="./images/slide/s1.png" alt="slide1" /></div>
                <div className="hinh2"><img src="./images/slide/s2.png" alt="slide2" /></div>
            </div>

            <div className="container d-flex justify-content-center mt-50 mb-50">
                <div className="row">
                    {products.map((product, index) =>
                        <div className="col-md-3 mt-2">
                            <div className="card">
                                <div className="card-body">
                                    <div className="card-img-actions"> <img src={product.image} alt={product.title} className="card-img img-fluid" width={96} height={350} alt="" /><div className="col"></div> </div>
                                </div>
                                <div className="card-body bg-light text-center">
                                    <div className="mb-2">
                                        <h6 className="font-weight-semibold mb-2">  <Link className="text-default mb-2" data-abc="true" to={`/product/${product.id}`}>{product.title}</Link> </h6> <a href="#" className="text-muted" data-abc="true">Laptops &amp; Notebooks</a>
                                    </div>
                                    <h3 className="mb-0 font-weight-semibold">{product.price}</h3>
                                    <div> <i className="fa fa-star star" /> <i className="fa fa-star star"/> <i className="fa fa-star star" /> <i className="fa fa-star star" /> </div>
                                    <div className="text-muted mb-3">34 reviews</div> <button type="button" onClick={() => addToCart(product)} className="button1" ><i className="fa fa-cart-plus mr-2" /><span>Add to cart</span> </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Product;