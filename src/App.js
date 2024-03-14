import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Menu from "./components/menu/Menu";
import LeftBar from "./components/leftBar/LeftBar";
import Home from "./components/home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemInside from "./components/itemInside/ItemInside";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <LeftBar />
        <div className="layout">
          <Header />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/inside/:id" element={<ItemInside />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
