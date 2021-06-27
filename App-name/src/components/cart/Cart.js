import React, { Component } from 'react';

class Cart extends Component {
    render() {
        const { cartCartItem } = this.props;
        return (

            <div>
                {cartCartItem.length === 0 ? (
                    <div className="table-cart">
                        <p className="no-cart">Không có sản phẩm nào trong giỏ hàng</p>
                        <button type="button" id="btnAn" onClick={anCheckOut} class="btn btn-outline-danger">Đóng</button>
                    </div>)
                    : (
                        <div className="table-cart">
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th scope="col">ID</th>
                                        <th scope="col">Hình ảnh</th>
                                        <th scope="col">Tên sản phẩm</th>
                                        <th scope="col">Giá</th>
                                        <th scope="col">Số lượng</th>
                                        <th scope="col">Xóa</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cartCartItem.map(item =>
                                        <tr>
                                            <th scope="row">{item._id}</th>
                                            <td><img src={item.image} alt={item.image}></img></td>
                                            <td>{item.title}</td>
                                            <td>{item.price}</td>
                                            <td>{item.count}</td>
                                            {console.log(this.props.removeCart)}
                                            <td><button class="btn btn-danger" onclick={() => this.props.removeCart(item)}>Xóa</button></td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                            <button type="button" id="btnAn" onClick={anCheckOut} class="btn btn-outline-danger">Đóng</button>
                        </div>
                    )}
            </div>
        );
    }
}

export default Cart;

function anCheckOut() {
    const tableCard = document.querySelector(".table-cart");
    tableCard.style.zIndex = "-1";
    tableCard.style.opacity = "0";
}