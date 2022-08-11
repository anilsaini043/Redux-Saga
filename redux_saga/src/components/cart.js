import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeToCart } from "../redux/action";

const Cart = () => {
    const dispatch = useDispatch();
    const cartData = useSelector((state) => state.cardData)
    return (
        <>
            <h1>Cart Details:</h1>

            <table id="customers">
                <thead>
                    <tr>
                        <th>S. No.</th>
                        <th>Brand</th>
                        <th>Title</th>
                        <th>Color</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cartData.length > 0 ?
                        cartData.map((item, ind) => {
                            return <tr key={ind}>
                                <td>{ind+1}</td>
                                <td>{item.brand}</td>
                                <td>{item.title}</td>
                                <td>{item.color}</td>
                                <td>{item.price}</td>
                                <td>
                                    <button onClick={() => dispatch(removeToCart(item.id))}>Remove</button>
                                </td>
                            </tr>
                        })
                        : <h1>Cart is Empty</h1>
                    }

                </tbody>
            </table>
        </>
    )
}

export default Cart;