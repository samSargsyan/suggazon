import "./menu.scss";
import explore from "../../images/exploreIcon.png";
import home from "../../images/homeIcon.png";
import cart from "../../images/cart.png";
import category from "../../images/categoryIcon.png";
import { useState } from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  const [active, setActive] = useState("");

  const toggleSub = () => {
    if (active === "subMenuActive") {
      setActive("subMenuPass");
    } else {
      setActive("subMenuActive");
    }
  };
  //toggle@ bacatrel, poxel timingner@

  return (
    <div className="menu">
      <div className="menuItem">
        <img src={home} alt="home" />
        <Link to="/">
          <span>Home</span>
        </Link>
      </div>
      <div className="menuItem" onClick={toggleSub}>
        <img src={category} alt="category" />
        <span>Categories</span>
      </div>
      <div className={`subMenu ${active}`}>
        <Link to="/category/homegoods">
          <span>Homegoods</span>
        </Link>
        <Link to="/category/clothing">
          <span>Clothing</span>
        </Link>
        <Link to="/category/gadgets">
          <span>Gadgets</span>
        </Link>
        <Link to="/category/wellness">
          <span>Wellness</span>
        </Link>
        <Link to="/category/accessories">
          <span>Accessories</span>
        </Link>
        <Link to="/category/kids">
          <span>Kids</span>
        </Link>
      </div>
      <div className="menuItem">
        <img src={explore} alt="explore" />
        <Link to="/explore">
          <span>Explore</span>
        </Link>
      </div>
      <Link to="/cart">
        <div className="menuItem">
          <img src={cart} alt="cart" />
          <span>Cart</span>
        </div>
      </Link>
    </div>
  );
};

export default Menu;
