import React, { useCallback, useEffect, useMemo } from "react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination"
import CarouselStyle from "./CarouselStyle.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getAPIBanner, getBanner } from "../../redux/slices/bannerSlice";
import "./SwiperStyle.css";
import Fancybox from "../../components/Fancybox/Fancybox";

export default function HomeCarousel() {
  let { arrBanner } = useSelector(getBanner);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAPIBanner());
  }, []);

  const renderBanner = () => {
    return arrBanner.map((banner, index) => {
      return (
        <SwiperSlide key={index}>
          <div className={CarouselStyle.carouselBox}>
            <a href="#">
              <img
                src={banner.hinhAnh}
                alt="movie-image"
                className="w-full h-full object-fill"
                style={{ maxHeight: "80vh" }}
              />
            </a>
            <Fancybox options={{ infinite: false }}>
              <a
                href={
                  banner.maPhim === 1283
                    ? "https://youtu.be/kBY2k3G6LsM"
                    : banner.maPhim === 1282
                    ? "https://youtu.be/8jraVtX821Q"
                    : banner.trailer
                }
                data-fancybox={banner.maPhim}
                className={CarouselStyle.buttonPlay}
              ></a>
            </Fancybox>
          </div>
        </SwiperSlide>
      );
    });
  };
  return (
    <div style={{ paddingTop: "66px" }}>
      <Swiper
        className="mySwiper"
        // install Swiper modules
        modules={[Navigation, Pagination, Autoplay, A11y]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: true,
        }}
        slidesPerView={1}
        navigation={true}
        cssMode={true}
        pagination={{
          clickable: true,
        }}
      >
        {renderBanner()}
      </Swiper>
    </div>
  );
}
