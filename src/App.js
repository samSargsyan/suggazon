import React, { useState } from 'react';
import './App.css';
import Header from './components/header/Header';
import LeftBar from './components/leftBar/LeftBar';
import Home from './components/home/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeGoods from './components/homeGoods/HomeGoods';
import Cart from './components/cart/Cart';
import Explore from './components/explore/Explore';

function App() {
  const [isOpen, setIsOpen] = useState(true);
  const [searchValue, setSearchValue] = useState('');

  return (
    <Router>
      <div className={`App ${isOpen ? 'AppOpen' : 'AppClosed'}`}>
        <LeftBar isOpen={isOpen} setIsOpen={setIsOpen} />
        <div className={`layout ${isOpen ? 'layoutOpen' : 'layoutClosed'}`}>
          <Header searchValue={searchValue} setSearchValue={setSearchValue} />
          <Routes>
            <Route path="/" element={<Home searchValue={searchValue} />} />
            <Route path="/suggazon" element={<Home searchValue={searchValue} />} />
            <Route path="/category/:category" element={<HomeGoods searchValue={searchValue} isOpen={isOpen} />} />
            <Route path="/explore" element={<Explore searchValue={searchValue} isOpen={isOpen} />} />
            <Route path="/cart" element={<Cart searchValue={searchValue} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
