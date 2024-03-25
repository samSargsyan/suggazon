import "./home.scss";
import headphone from "../../images/headphone.png";
import earbud from "../../images/earbud.png";
import Item from "../item/Item";
import BestSeller from "../bestSeller/BestSeller";
import { Link } from "react-router-dom";
import data from "../data";

const Home = () => {
  return (
    <div className="home">
      <div className="homeFirstRow">
        <div className="saleBox">
          <div className="sellBoxImage"></div>
          <div className="sellBoxText">
            <strong>Clown Wig</strong>
            <span>A clown wig you can wear to any silly event!</span>
            <div className="buttonBox">
              <button>Buy Now!</button>
              <button>Add to Cart</button>
            </div>
          </div>
        </div>
        <div className="advertise">
          <span>Summer headphones for top deals!</span>
          <span>Buy it now!</span>
          <img src={headphone} alt="headphone" width="100" />
        </div>
      </div>
      <div className="itemsAndBestSeller">
        <div className="items">
          {data.map((item, index) => {
            return (
              <Link to={`/inside/${item.id}`}>
                <Item item={item} key={index * item.id} />
              </Link>
            );
          })}
          <div className="exploreSection">
            <span>Explore Popular Categories</span>
            <span>See All</span>
          </div>
        </div>
        <BestSeller />
      </div>
    </div>
  );
};

export default Home;

//add button which would resize during mobile
