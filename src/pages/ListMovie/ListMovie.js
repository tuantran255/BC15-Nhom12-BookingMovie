import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAPIListMovies,
  getListMovies,
} from "../../redux/slices/listMoviesSlice";
import { Tabs } from "antd";
import MovieCard from "../../components/MovieCard/MovieCard";
import "animate.css";

const { TabPane } = Tabs;

function callback(key) {}

export default function ListMovie(props) {
  let { arrMovies } = useSelector(getListMovies);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAPIListMovies());
  }, []);
  const arrUpcomingMovie = arrMovies.filter((movie) => movie.sapChieu === true);
  const arrPlayingMovie = arrMovies.filter((movie) => movie.sapChieu === false);
  const renderListMovies = (arrMovies) => {
    return arrMovies.map((movie, index) => {
      return (
        <Fragment key={index}>
          <MovieCard
            nameMovie={movie.tenPhim}
            img={movie.hinhAnh}
            des={movie.moTa}
            movieID={movie.maPhim}
            trailer={movie.trailer}
          />
        </Fragment>
      );
    });
  };
  return (
    <div className="container pt-20 pb-10 xl:max-w-5xl listMovie">
      <Tabs
        defaultActiveKey={props.location.state?.status && props.location.state?.status === "Upcoming" ? "2" : "1"}
        onChange={callback}
        size="large"
      >
        <TabPane tab="Phim đang chiếu" key="1">
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-3 animate__animated animate__fadeInUp">
            {renderListMovies(arrPlayingMovie)}
          </div>
        </TabPane>
        <TabPane tab="Phim sắp chiếu" key="2">
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-3 animate__animated animate__fadeInUp">
            {renderListMovies(arrUpcomingMovie)}
          </div>
        </TabPane>
      </Tabs>
    </div>
  );
}
