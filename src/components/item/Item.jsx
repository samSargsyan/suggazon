import React, { useState, useEffect } from "react";
import "./item.scss";

const Item = ({ item, deleteItem, onDelete }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
    setTimeout(() => setIsClicked(false), 600);

    let storedItems = JSON.parse(localStorage.getItem("items")) || [];

    const itemExists = storedItems.some(
      (storedItem) => storedItem.name === item.name
    );

    if (!itemExists) {
      storedItems.push(item);
      localStorage.setItem("items", JSON.stringify(storedItems));
      onDelete && onDelete(); // Notify Cart component to update state
    }
  };

  const handleDelete = () => {
    let storedItems = JSON.parse(localStorage.getItem("items")) || [];

    const updatedItems = storedItems.filter(
      (storedItem) => storedItem.name !== item.name
    );

    localStorage.setItem("items", JSON.stringify(updatedItems));
    onDelete && onDelete(); // Notify Cart component to update state
  };

  return (
    <div className="item">
      {deleteItem ? (
        <div className="deleteItem" onClick={handleDelete}></div>
      ) : (
        ""
      )}
      <a href={item.link} target="_blank" rel="noreferrer">
        <div
          className="itemPicture"
          style={{ backgroundImage: `url(${item.image})` }}
        ></div>
        <div className="itemDesc">
          <span>{item.name}</span>
        </div>
      </a>
      <div
        className={`itemCart ${isClicked ? "clicked" : ""}`}
        onClick={handleClick}
      ></div>
    </div>
  );
};

export default Item;
