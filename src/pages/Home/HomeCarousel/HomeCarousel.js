import React, { memo } from "react";
import { Navigation, Pagination, A11y, Autoplay, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./SwiperStyle.css";
import PlayButton from "../../../components/PlayButton/PlayButton";

function HomeCarousel(props) {
  const renderBanner = () => {
    return props.arrBanner.map((banner, index) => {
      return (
        <SwiperSlide key={index}>
          <div className="carouselBox h-full">
            <a href="#">
              <img
                src={banner.hinhAnh}
                alt="movie-image"
                className="w-full h-full object-fill "
                style={{ maxHeight: "80vh" }}
              />
            </a>
            <PlayButton
              linkTrailer={
                banner.maPhim === 1283
                  ? "https://youtu.be/kBY2k3G6LsM"
                  : banner.maPhim === 1282
                  ? "https://youtu.be/8jraVtX821Q"
                  : banner.trailer
              }
              maPhim={banner.maPhim}
            />
          </div>
        </SwiperSlide>
      );
    });
  };
  return (
    <div className="hidden md:block" style={{ paddingTop: "66px" }}>
      <Swiper
        className="mySwiper"
        // install Swiper modules
        modules={[Navigation, Pagination, Autoplay, A11y, EffectFade]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
        navigation={true}
        effect={"fade"}
        pagination={{
          clickable: true,
        }}
      >
        {renderBanner()}
      </Swiper>
    </div>
  );
}

export default memo(HomeCarousel);
