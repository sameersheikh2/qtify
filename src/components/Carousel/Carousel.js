import React, { useEffect } from "react";
import "swiper/swiper.css";
import { Navigation } from "swiper/modules";
import { Swiper, useSwiper, SwiperSlide } from "swiper/swiper-react";
import styles from "./Carousel.module.css";
import CarouselLeft from "./CarouselLeftNavigation/CarouselLeftNavigation";
import CarouselRight from "./CarouselRightNavigation/CarouselRightNavigation";

const Controls = ({ data }) => {
  let swiper = useSwiper();
  useEffect(() => {
    // swiper.slideTo(0)
  }, [data]);

  return <></>;
};

const Carousel = ({ data, renderCardComponent }) => {
  return (
    <div className={styles.wrapper}>
      <Swiper
        initialSlide={0}
        modules={{ Navigation }}
        slidesPerView={"auto"}
        spaceBetween={40}
        allowTouchMove
      >
        <Controls data={data} />
        <CarouselLeft />
        <CarouselRight />
        {data.map((item) => (
          <SwiperSlide key={item.id}>{renderCardComponent(item)}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
