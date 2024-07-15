import "./header.scss";
import cartDot from "../../images/cartDot.png";
import cart from "../../images/cart.png";
import searchIcon from "../../images/searchIcon.png";
import filterIcon from "../../images/filterIcon.png";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = ({ searchValue, setSearchValue }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("items")) || [];
    setItems(storedItems);
  }, []);

  return (
    <div className="header">
      <div className="headerTitle">
        <h1>jhgjkhj</h1>
        <h4>ihskbciu</h4>
      </div>
      <div className="headerSearch">
        <div className="searchBox">
          <div className="searchBoxItems">
            <img src={searchIcon} alt="searchIcon" />
            <input
              type="search"
              placeholder="Search Product"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
          </div>
          <img src={filterIcon} alt="filterIcon" />
        </div>
        <Link to="/cart">
          <img src={items.length ? cartDot : cart} alt="cart" />
        </Link>
      </div>
    </div>
  );
};

export default Header;
