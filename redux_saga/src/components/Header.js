import React from 'react';
import "../components/header.css";
import { useSelector } from 'react-redux';
import Main from './Main';


const Header = () => {
    const getData = useSelector((state) => state.cardData)
    console.log("store data--->", getData.length)
    return (
        <>
            <div className="header">
                <span className="logo">E-Commerce</span>
                <div className="header-right">
                    <i className="fa fa-shopping-cart" style={{fontSize:"48px",color:"#000"}}>
                        <span>{getData.length}</span>
                    </i>
                </div>
            </div>

            <div style={{paddingLeft:"20px"}}>
                <h1>Responsive Header</h1>
                <p>React With Redux and Saga</p>
                <p>
                    <Main />
                </p>
            </div>
        </>
    )
}

export default Header;