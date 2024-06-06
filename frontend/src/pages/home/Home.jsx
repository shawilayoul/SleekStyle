import { FaShippingFast } from "react-icons/fa";
import { MdSecurity, MdBookOnline } from "react-icons/md";
import { BsShieldFillCheck } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css";
import { homeSlideData, homeProductData } from "../../constant/data";
import "./home.scss";
const Home = () => {
  return (
    <div className="home-container">
      <section className="home-slider">
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={200}
          slidesPerView={1}
          navigation={true}
          loop={true}
          pagination={{ clickable: true }}
        >
          {homeSlideData.map(
            ({ id, title, description, imageRight, imgageLeft }) => {
              return (
                <SwiperSlide key={id}>
                  <div className="slider" key={id}>
                    <div className="left">
                      <img style={{ width: "200px" }} src={imgageLeft} alt="" />
                    </div>
                    <div className="middle">
                      <h2>{title}</h2>
                      <p>{description}</p>
                      <div className="shop-btn">
                        <button> Shop Men</button>
                        <button>Shop women</button>
                      </div>
                    </div>
                    <div className="right">
                      <img style={{ width: "200px" }} src={imageRight} alt="" />
                    </div>
                  </div>
                </SwiperSlide>
              );
            }
          )}
        </Swiper>
      </section>
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
      <section className="products">
        <h3>Our Products</h3>
        <div className="filter">
          <button>All</button>
          <button>Men</button>
          <button>Women</button>
          <button>Kid</button>
        </div>
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
      <section className="products">
        <h3>New Arrivals </h3>
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
  );
};

export default Home;
