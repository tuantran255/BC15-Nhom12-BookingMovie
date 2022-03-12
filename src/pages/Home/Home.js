import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAPIBanner, getBanner } from "../../redux/slices/bannerSlice";
import {
  getAPIListCinema,
  getListCinema,
} from "../../redux/slices/listCinemaSlice";
import {
  getAPIListMovies,
  getListMovies,
} from "../../redux/slices/listMoviesSlice";
import HomeApp from "./HomeApp/HomeApp";
import HomeCarousel from "./HomeCarousel/HomeCarousel";
import HomeMenu from "./HomeMenu/HomeMenu";
import HomeMovie from "./HomeMovie/HomeMovie";
import HomeNews from "./HomeNews/HomeNews";

export default function Home(props) {
  let { arrBanner } = useSelector(getBanner);
  let { upcomingMovies, playingMovies } = useSelector(getListMovies);
  let { arrCinema } = useSelector(getListCinema);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAPIListMovies());
    dispatch(getAPIBanner());
    dispatch(getAPIListCinema());
  }, []);
  return (
    <Fragment>
      <HomeCarousel arrBanner={arrBanner} />
      <HomeMovie
        upcomingMovies={upcomingMovies}
        playingMovies={playingMovies}
      />
      <HomeMenu arrCinema={arrCinema} />
      <HomeNews />
      <HomeApp/>
    </Fragment>
  );
}
