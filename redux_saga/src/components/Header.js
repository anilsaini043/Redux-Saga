import React from 'react';
import "../components/header.css";
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { searchProduct } from "../redux/action";

const Header = () => {
    const dispatch = useDispatch();
    const getData = useSelector((state) => state.cardData)

    return (
        <>
            <div className="header">
                <Link to={"/"}>
                    <span className="logo">E-Commerce</span>
                </Link>
                <input type="text" name="search" placeholder="Search.." onChange={(e)=> dispatch(searchProduct(e.target.value))}></input>
                <Link to={"/cartInfo"}>
                    <div className="header-right">
                        <i className="fa fa-shopping-cart" style={{ fontSize: "48px", color: "#000" }}>
                            <span>{getData.length}</span>
                        </i>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default Header;