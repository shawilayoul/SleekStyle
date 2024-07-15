import "./Shop.scss";
import ChiffreSection from "../../features/ChiffreSection";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css";
import { shopSlideDAta } from "../../constant/data";
import ProductFeatures from "../../features/ProductFeatures";
import Products from "../../features/Prodcuts.jsx";
import NewProducts from "../../features/NewProducts.jsx";

const Shop = () => {
  return (
    <div className="shop-container">
      <section className="shop-top">
        <div className="shop-left">
          <h3>Categories</h3>
          <div className="select-section">
            <div className="select-item">
              <label htmlFor="men">Men</label>
              <select name="" id="men">
                <option value="">Sweaters & Knits</option>
                <option value="">Jackest & Coats</option>
                <option value="">Shorts</option>
              </select>
            </div>
            <div className="select-item">
              <label htmlFor="men">Women</label>
              <select name="" id="men">
                <option value="">Jackest & Coats</option>
                <option value="">Sweaters & Knits</option>

                <option value="">Shorts</option>
              </select>
            </div>
            <div className="select-item">
              <label htmlFor="men">Kid</label>
              <select name="" id="men">
                <option value="">Shorts</option>
                <option value="">Sweaters & Knits</option>
                <option value="">Jackest & Coats</option>
              </select>
            </div>
            <div className="select-item">
              <label htmlFor="men">Top Selles</label>
              <select name="" id="men">
                <option value="">Sweaters & Knits</option>
                <option value="">Jackest & Coats</option>
                <option value="">Shorts</option>
              </select>
            </div>
          </div>
          <div className="color">
            <h3>Colors</h3>
            <div className="color-items">
              <button className="white"></button>
              <button className="red"></button>
              <button className="yellow"></button>
              <button className="black"></button>
              <button className="blue"> </button>
              <button className="green"></button>
            </div>
          </div>
          <div className="price-filter">
            <h3> Filter by Price</h3>
            <input type="range" />
          </div>
        </div>
        <div className="shop-right">
          <section className="shop-slider">
            <Swiper
              modules={[Navigation, Pagination, A11y]}
              spaceBetween={200}
              slidesPerView={1}
              navigation={true}
              loop={true}
              pagination={{ clickable: true }}
            >
              {shopSlideDAta.map(({ id, title,description, image }) => {
                return (
                  <SwiperSlide key={id}>
                    <div className="slider" key={id}>
                      <div className="left">
                        <img
                          style={{ width: "350px", height: "300px" }}
                          src={image}
                          alt=""
                        />
                      </div>
                      <div className="right">
                        <h2>
                       {title}
                        </h2>
                        <p>{description}</p>
                        <div className="shop-btn">
                          <button> Shop Now</button>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </section>
          <h3 className="title">Our Products</h3>
          <Products />
        </div>
      </section>
      <ProductFeatures />
      <h3 className="title">New Arrival</h3>
      <NewProducts/>
      <ChiffreSection />
    </div>
  );
};

export default Shop;
