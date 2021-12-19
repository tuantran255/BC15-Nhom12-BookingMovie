import { Fragment } from "react";
import { Route } from "react-router-dom";
import Header from "./Layout/Header/Header";

export const HomeTemplate = (props) => {
  let { Component, path } = props;

  return (
    <Route
      exact
      path={path}
      render={(propsRoute) => {
        return (
          <Fragment>
            <Header />
            <Component {...propsRoute} />
            <footer className="text-center text-white bg-red-400">
              Footer component
            </footer>
          </Fragment>
        );
      }}
    />
  );
};
