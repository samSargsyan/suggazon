import "./bestSeller.scss";
import data from "../data";
import { isMobile } from "react-device-detect";

const BestSeller = () => {
  return (
    <div className="bestSeller">
      <h2>Best Sales</h2>
      {isMobile ? (
        <div className="cutItems">
          {data.slice(0, 6).map((item, i) => {
            return (
              <a href={item.link} key={i}>
                <div className="bestItem bestItemMobile">
                  <img src={item.image} alt={item.name} />
                  <div className="bestSales">
                    <span className="bestItemTitle">{item.name}</span>
                  </div>
                  <span>Price ${item.price}</span>
                </div>
              </a>
            );
          })}
        </div>
      ) : (
        data.map((item, index) => (
          <a href={item.link} key={index}>
            <div className="bestItem">
              <img src={item.image} alt={item.name} />
              <div className="bestSales">
                <span className="bestItemTitle">{item.name}</span>
              </div>
              <span>Price ${item.price}</span>
            </div>
          </a>
        ))
      )}
    </div>
  );
};

export default BestSeller;
