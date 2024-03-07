import React from "react";
import { useState, useEffect } from "react";
import { useSwiper } from "swiper/swiper-react";
import RightArrow from "jsx:../../../assets/rightArrow.svg";
import styles from "./CarouselRightNavigation.module.css";

const CarouselRightNavigation = () => {
  const swiper = useSwiper();
  const [isEnd, setIsEnd] = useState(swiper.isEnd);

  useEffect(() => {
    swiper.on("slideChange", () => {
      setIsEnd(swiper.isEnd);
    });
  }, [swiper]);
  return (
    <div className={styles.rightNavigation}>
      {!isEnd && <RightArrow onClick={() => swiper.slideNext()} />}
    </div>
  );
};

export default CarouselRightNavigation;
