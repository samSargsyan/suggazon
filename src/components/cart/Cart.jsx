import React, { useEffect, useState } from "react";
import "./cart.scss";
import cartDot from "../../images/cartDot.png";
import Item from "../item/Item";

const Cart = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("items")) || [];
    setItems(storedItems);
  }, []);

  const handleDeleteItem = () => {
    const storedItems = JSON.parse(localStorage.getItem("items")) || [];
    setItems(storedItems);
  };

  return (
    <div className="cart">
      <span className="cartTitle">My Cart</span>
      <div className="cartBox">
        <span className="cartNumber">{items.length}</span>
        <img className="cartDot" src={cartDot} alt="cartDot" />
      </div>
      <div className="cartItems">
        {items.map((item, index) => (
          <Item
            key={index}
            item={item}
            deleteItem={true}
            onDelete={handleDeleteItem}
          />
        ))}
      </div>
    </div>
  );
};

export default Cart;
