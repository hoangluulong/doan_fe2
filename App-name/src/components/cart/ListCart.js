import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ListCart = () => {
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
                <div className="test">
                    List cart
                    <p className="no-cart">Không có sản phẩm nào trong giỏ hàng</p>
                </div>)
                : (
                    <div className="table-abc">
                        List cart
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Hình ảnh</th>
                                    <th scope="col">Tên sản phẩm</th>
                                    <th scope="col">Giá</th>
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
                                            
                                        </div>
                                        <button className="btn-muangay">
                                            Mua ngay
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                )}
        </div>
    );
};

export default ListCart;
