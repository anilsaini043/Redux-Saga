import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import { useDispatch } from "react-redux";
import ProductList from './components/productList';
import { productList } from './redux/productAction';
import { Route, Routes } from "react-router-dom";
import Cart from './components/cart';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(productList())
  }, [])

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<ProductList />} />
        <Route path='/cartInfo' element={<Cart />} />
      </Routes>

    </div>
  );
}

export default App;
