import React, { Fragment } from "react";
import { Tabs } from "antd";
import "./ListMovieTab.css";
import MovieCard from "../../../components/MovieCard/MovieCard";
import { NavLink } from "react-router-dom";
import { memo } from "react";

const { TabPane } = Tabs;

function callback(key) {}

function HomeMovie(props) {
  const renderListMovies = (arrMovies) => {
    return arrMovies.map((movie, index) => {
      if (index < 6) {
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
      }
    });
  };
  return (
    <Fragment>
      <div
        id="homeMovie"
        className="container pt-20 md:pt-5 pb-10 xl:max-w-7xl listMovie"
      >
        <Tabs defaultActiveKey="1" onChange={callback} size="large">
          <TabPane tab="Phim đang chiếu" key="1">
            <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-3 animate__animated animate__fadeIn">
              {renderListMovies(props.playingMovies)}
            </div>
            <div className="flex justify-end my-4">
              <NavLink
                to={{
                  pathname: `/listmovie`,
                  state: {
                    status: "Playing",
                  },
                }}
                onClick={() => {
                  document.body.scrollTop = 0;
                  document.documentElement.scrollTop = 0;
                }}
                className="inline-block transition-all duration-300 px-10 py-3 font-semibold border rounded border-red-500 text-red-500 hover:text-white hover:bg-red-500"
              >
                Xem thêm
              </NavLink>
            </div>
          </TabPane>
          <TabPane tab="Phim sắp chiếu" key="2">
            <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-3 animate__animated animate__fadeIn">
              {renderListMovies(props.upcomingMovies)}
            </div>
            <div className="flex justify-end my-4">
              <NavLink
                to={{
                  pathname: `/listmovie`,
                  state: {
                    status: "Upcoming",
                  },
                }}
                className="inline-block transition-all duration-300 px-10 py-3 font-semibold border rounded border-red-500 text-red-500 hover:text-white hover:bg-red-500"
              >
                Xem thêm
              </NavLink>
            </div>
          </TabPane>
        </Tabs>
      </div>
    </Fragment>
  );
}

export default memo(HomeMovie);
