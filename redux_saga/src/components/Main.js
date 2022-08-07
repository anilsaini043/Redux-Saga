import React from "react";
import "../components/header.css";
import { addToCart, removeToCart, clearToCart } from "../redux/action";
import { useDispatch } from "react-redux";
import { productList } from "../redux/productAction";

const Main = () => {
    const dispatch = useDispatch();
    const data = {
        name: "Anil",
        skill: "React/Vue"
    }
    return (
        <>
            <button
                onClick={() => dispatch(addToCart(data))}
                className="button button2"
            >
                Get
            </button>

            <button
                onClick={() => dispatch(removeToCart())}
                className="button button2"
            >
                Remove
            </button>

            <button
                onClick={() => dispatch(clearToCart())}
                className="button button2"
            >
                Clear
            </button>

            <button
                onClick={() => dispatch(productList("hello anil"))}
                className="button button2"
            >
                Get Product
            </button>

        </>
    );
}

export default Main;
