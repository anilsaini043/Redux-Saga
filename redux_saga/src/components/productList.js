import React from "react";
import "../components/header.css";
import { addToCart, removeToCart } from "../redux/action";
import { useSelector, useDispatch } from "react-redux";

const ProductList = () => {
    const dispatch = useDispatch();
    const getProductList = useSelector((state) => state.productData[0]);

    return (
        <div>
            <h2 style={{ "textAlign": "center" }}>List of all Products</h2>
            <div className="productContainer">

                {
                    getProductList && getProductList.map((item, ind) => {
                        return <div className="card" key={ind}>
                            <div className="img-container">
                                <img src={item.image} alt="Loading..."/>
                            </div>

                            <h1>{item.title}</h1>
                            <h1>{item.brand}</h1>
                            <p className="price">{item.price}</p>
                            <h2>{item.color}</h2>
                            <p>
                                <button
                                    onClick={() => dispatch(addToCart(item))}
                                >
                                    Add to Cart
                                </button>
                                <button style={{marginTop:'10px'}}
                                    onClick={() => dispatch(removeToCart(item.id))}
                                >
                                    Remove to Cart
                                </button>
                            </p>
                        </div>
                    })
                }

            </div>
        </div>
    );
}

export default ProductList;
