import React from "react";
import Slider from "react-slick";
import styles from "./Trending_Slider.module.css"; // CSS module import
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { trendingProducts } from "../context/Data";

const Trending_Slider = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 100,
    cssEase: "linear",
    arrows: false,
  };

  return (
    <div className={styles.sliderContainer}>
      <Slider {...settings}>
        {trendingProducts.map((product, index) => (
          <div key={index} className={styles.slide}>
            <img
              src={product.image}
              alt=""
              className={styles.slideImage}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Trending_Slider;
