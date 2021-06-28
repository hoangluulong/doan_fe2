import React, { Component } from 'react';

class Product extends Component {
    render() {
        return (
            <div>
                <div className="slide-long">
                    <div className="hinh1"><img src="./images/slide/s1.png" alt="slide1" /></div>
                    <div className="hinh2"><img src="./images/slide/s2.png" alt="slide2" /></div>
                </div>

                <div className="container d-flex justify-content-center mt-50 mb-50">
                    <div className="row">
                        {this.props.product.map(product =>
                            <div className="col-md-3 mt-2">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="card-img-actions"> <img src={product.image} alt={product.title} className="card-img img-fluid" width={96} height={350} alt="" /> </div>
                                    </div>
                                    <div className="card-body bg-light text-center">
                                        <div className="mb-2">
                                            <h6 className="font-weight-semibold mb-2"> <a href={"/"+product.title+"-"+product.id} className="text-default mb-2" data-abc="true">{product.title}</a> </h6> <a href="#" className="text-muted" data-abc="true">Laptops &amp; Notebooks</a>
                                        </div>
                                        <h3 className="mb-0 font-weight-semibold">{product.price}</h3>
                                        <div> <i className="fa fa-star star" /> <i className="fa fa-star star" /> <i className="fa fa-star star" /> <i className="fa fa-star star" /> </div>
                                        <div className="text-muted mb-3">34 reviews</div> <button type="button" className="btn bg-cart" onClick={() => this.props.addToCart(product)}><i className="fa fa-cart-plus mr-2" /> Add to cart</button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

export default Product