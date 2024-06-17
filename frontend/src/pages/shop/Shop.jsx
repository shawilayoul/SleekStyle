import "./Shop.scss";
import { FaShippingFast } from "react-icons/fa";
import { MdSecurity, MdBookOnline } from "react-icons/md";
import { BsShieldFillCheck } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css";
import { shopSlideDAta, homeProductData } from "../../constant/data";

const Shop = () => {
  return (
    <div className="shop-container">
      <section className="shop-top">
        <div className="shop-left">
          <h3>CATEGORIES</h3>
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
              {shopSlideDAta.map(({ id, title, description, image }) => {
                return (
                  <SwiperSlide key={id}>
                    <div className="slider" key={id}>
                      <div className="left">
                        <img
                          style={{ width: "350px" ,height:"300px"}}
                          src={image}
                          alt=""
                        />
                      </div>
                      <div className="right">
                        <h2>
                          SUMMER FASHION <br />
                          COLLECTION IS READY
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
          <section className="products">
            <h3>Our Products</h3>
            <div className="items">
              {homeProductData.map(({ id, name, price, image }) => {
                return (
                  <div className="item" key={id}>
                    <img src={image} alt="" />
                    <h4>{name}</h4>
                    <p>$ {price}</p>
                    <button>Add to cart</button>
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      </section>
      <div className="shop-bottom">
        <section className="features">
          <div className="features-item">
            <FaShippingFast className="icon icon-red" />
            <p>Free Shipping</p>
          </div>
          <div className="features-item">
            <MdSecurity className="icon" />
            <p>Secure Checkout</p>
          </div>
          <div className="features-item">
            <MdBookOnline className="icon icon-red" />
            <p>Online checkout</p>
          </div>
          <div className="features-item">
            <BsShieldFillCheck className="icon" />
            <p>GREAT QUALITY</p>
          </div>
        </section>
        <section className="number-features">
          <div className="features-item">
            <h4>15K+</h4>
            <p>
              Each number in this milestone represents a satisfied customer.
            </p>
          </div>
          <div className="features-item">
            <h4>8+</h4>
            <p>Each experience is a chapter in the grand story of Trendzy.</p>
          </div>
          <div className="features-item">
            <h4>16</h4>
            <p>Fashionable, comfy, and quality shirts loved by many.</p>
          </div>
          <div className="features-item">
            <h4>92%</h4>
            <p>Mostly natural ingredients for a purer, cleaner choice.</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Shop;
