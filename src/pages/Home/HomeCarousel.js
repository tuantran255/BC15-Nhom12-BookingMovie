import React, { useEffect } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import CarouselStyle from "./CarouselStyle.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getAPIBanner } from "../../redux/actions/BannerAction";

export default function HomeCarousel() {
  let arrBanner = useSelector((rootReducer) => rootReducer.BannerReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAPIBanner());
  }, []);
  const renderBanner = () => {
    return arrBanner.map((banner, index) => {
      return (
        <SwiperSlide key={index}>
          <a
            href="#"
            style={{
              background: `url(${banner.hinhAnh}) center / cover`,
              paddingTop: "42%",
            }}
            className="w-full inline-block"
          ></a>
          <a href="#" className={CarouselStyle.buttonPlay}></a>
        </SwiperSlide>
      );
    });
  };
  return (
    <div style={{ paddingTop: "66px" }}>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        slidesPerView={1}
        navigation
        loop={true}
        cssMode={true}
      >
        {renderBanner()}
      </Swiper>
    </div>
  );
}
