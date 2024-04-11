import React, { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Menu from "./components/menu/Menu";
import LeftBar from "./components/leftBar/LeftBar";
import Home from "./components/home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemInside from "./components/itemInside/ItemInside";

function App() {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className={`App ${isOpen ? 'AppOpen' : 'AppClose'}`}>
      <BrowserRouter>
        <LeftBar isOpen={isOpen} setIsOpen={setIsOpen} />
        <div className={`layout ${isOpen ? 'mobileOpenMenu' : 'mobileCloseMenu'}`}>
          <Header />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/suggazon" element={<Home />} />
            <Route path="/inside/:id" element={<ItemInside />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
