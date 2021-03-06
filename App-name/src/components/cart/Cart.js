import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Cart = () => {
    const [carts, setcart] = useState([]);

    useEffect(() => {
        loadCart();
    }, []);

    const loadCart = async () => {
        const result = await axios.get("http://localhost:3003/carts");
        setcart(result.data.reverse());
        console.log(result);
    };

    const deleteCart = async id => {
        await axios.delete(`http://localhost:3003/carts/${id}`);
        loadCart();
    };

    return (
        <div>
            {carts.length === 0 ? (
                <div className="table-cart">
                    List cart
                    <p className="no-cart">Không có sản phẩm nào trong giỏ hàng</p>
                    <button type="button" id="btnAn" onClick={anCheckOut} class="btn btn-outline-danger">Đóng</button>
                </div>)
                : (
                    <div className="table-cart">
                        List cart
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
                                {carts.map(item =>
                                    <tr>
                                        <th scope="row">{item._id}</th>
                                        <td><img src={item.image} alt={item.image}></img></td>
                                        <td>{item.title}</td>
                                        <td>{item.price}</td>
                                        <td>{item.count}</td>
                                        <td><Link
                                            class="btn btn-danger"
                                            onClick={() => deleteCart(item.id)}
                                        >
                                            Delete
                                        </Link></td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                        {carts.length !== 0 && (
                            <div>
                                <div className="cart">
                                    <div className="total">
                                        <div>
                                            Tổng:{" "}
                                            {carts.reduce((a, c) => a + c.price * c.count, 0)}
                                        </div>
                                        <button className="button primary">
                                            Mua ngay
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                        <button type="button" id="btnAn" onClick={anCheckOut} class="btn btn-outline-danger">Đóng</button>
                    </div>
                )}
        </div>
    );
};

export default Cart;

function anCheckOut() {
    const tableCard = document.querySelector(".table-cart");
    tableCard.style.zIndex = "-1";
    tableCard.style.opacity = "0";
}