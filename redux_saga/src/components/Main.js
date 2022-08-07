import React from "react";
import "../components/header.css";
import { addToCart, removeToCart, clearToCart } from "../redux/action";
import { useDispatch } from "react-redux";

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
        </>
    );
}

export default Main;
