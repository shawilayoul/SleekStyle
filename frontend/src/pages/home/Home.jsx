import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css";
import { homeSlideData } from "../../constant/data";
import "./home.scss";
import ChiffreSection from "../../features/ChiffreSection";
import ProductFeatures from "../../features/ProductFeatures";
import Products from "../../features/Prodcuts";
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
      <ProductFeatures />
      <h3 className="title">Our Products</h3>
      <Products />

      <h3 className="title">New Arrivals </h3>
      <Products />

      <ChiffreSection />
    </div>
  );
};

export default Home;
