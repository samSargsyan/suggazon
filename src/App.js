import React, { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import LeftBar from "./components/leftBar/LeftBar";
import Home from "./components/home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeGoods from "./components/homeGoods/HomeGoods";
import Cart from "./components/cart/Cart";
import Explore from "./components/explore/Explore";

function App() {
  const [isOpen, setIsOpen] = useState(true);
  const [searchValue, setSearchValue] = useState("");
  return (
    <div className={`App ${isOpen ? 'AppOpen' : 'AppClose'}`}>
      <BrowserRouter>
        <LeftBar isOpen={isOpen} setIsOpen={setIsOpen} />
        <div className={`layout ${isOpen ? 'mobileOpenMenu' : 'mobileCloseMenu'}`}>
          <Header searchValue={searchValue} setSearchValue={setSearchValue} />
          <Routes>
            <Route exact path="/" element={<Home searchValue={searchValue} />} />
            <Route exact path="/suggazon" element={<Home searchValue={searchValue} />} />
            <Route path="/category/:category" element={<HomeGoods searchValue={searchValue} isOpen={isOpen} />} />
            <Route path="/explore" element={<Explore searchValue={searchValue} isOpen={isOpen} />} />
            <Route exact path="/cart" element={<Cart searchValue={searchValue} />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
