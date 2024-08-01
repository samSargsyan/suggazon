import "./home.scss";
import headphone from "../../images/headphone.png";
import Item from "../item/Item";
import BestSeller from "../bestSeller/BestSeller";
import data from "../data";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";
import advertise from "../advertise";
import { Autoplay, Mousewheel, Pagination } from "swiper/modules";
import slider from "../slider.js";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

const Home = ({ searchValue }) => {
  const categories = [
    "Homegoods",
    "Clothing",
    "Gadgets",
    "Wellness",
    "Acccessories",
    "Kids",
  ];

  const filterAndGroupItems = (items, numberOfCategories, itemsPerCategory) => {
    // Filter items based on searchValue
    const filteredItems = items.filter((item) =>
      item.name.toLowerCase().includes(searchValue.toLowerCase())
    );

    // Initialize categorized items array
    const categorizedItems = [];

    // Group filtered items into categories
    for (let i = 0; i < numberOfCategories; i++) {
      const startIndex = i * itemsPerCategory;
      const endIndex = startIndex + itemsPerCategory;
      const categoryItems = filteredItems.slice(startIndex, endIndex);
      categorizedItems.push(categoryItems);
    }

    return categorizedItems;
  };

  // Group and filter items
  const categorizedItems = filterAndGroupItems(data, 5, 4); // 5 categories with 4 items per category

  return (
    <div className="home">
      <div className="homeFirstRow">
        <div className="homeFirstSwiper">
          <Swiper
            direction={"vertical"}
            slidesPerView={1}
            spaceBetween={30}
            mousewheel={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            navigation={true}
            pagination={{
              clickable: true,
            }}
            loop={true}
            modules={[Autoplay, Mousewheel, Pagination]}
            className="swiperSale"
          >
            {slider.map((item) => {
              return (
                <SwiperSlide>
                  <div className="saleBox">
                    <div
                      className="sellBoxImage"
                      style={{ backgroundImage: `url('${item.image}')` }}
                    ></div>
                    <div className="sellBoxText">
                      <strong>{item.name}</strong>
                      <span>A clown wig you can wear to any silly event!</span>
                      <div className="buttonBox">
                        <a href={item.link} target="_blank" rel="noreferrer">
                          <button>Buy Now!</button>
                        </a>
                        <button>Add to Cart</button>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div className="homeSecondSwiper">
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper"
          >
            {advertise.map((item) => {
              return (
                <SwiperSlide>
                  <img src={item.image} alt="headphone" width="100" />
                  <span>{item.name}</span>
                  <a href={item.link} target="_blank" rel="noreferrer">
                    <span>Buy it now!</span>
                  </a>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        {/* <div className="advertise">
          <span>Summer headphones for top deals!</span>
          <span>Buy it now!</span>
          <img src={headphone} alt="headphone" width="100" />
        </div> */}
      </div>
      <div className="itemsAndBestSeller">
        <div className="items">
          {categorizedItems.map((category, categoryIndex) => (
            <div className="exploreSection" key={categoryIndex}>
              <span>{categories[categoryIndex]}</span>
              {category.map((item, index) => (
                <Item item={item} key={index} />
              ))}
            </div>
          ))}
          <div className="exploreSection">
            <Link to="/explore">
              <span>See All</span>
            </Link>
          </div>
        </div>
        <BestSeller />
      </div>
    </div>
  );
};

export default Home;

//add button which would resize during mobile
