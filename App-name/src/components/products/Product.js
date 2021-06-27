import React, { Component } from 'react';

class Product extends Component {
    render() {
        return (
            <div>
                <ul className="products">
                    {this.props.product.map(product =>
                        <li key={product._id}>
                            <div className="product">
                            <img src={product.image} alt={product.title}></img>
                                <a href={"#" + product._id}>
                                    <p>{product.title}</p>
                                </a>
                                <div className="product-price">
                                    <div className="price">{product.price}</div>
                                </div>
                                <div className="button-add">
                                    <button onClick={() => this.props.addToCart(product)} className="button primary">
                                        Add To Cart
                                    </button>
                                </div>
                            </div>
                        </li>
                    )}
                </ul>
            </div>
        );
    }
}

export default Product