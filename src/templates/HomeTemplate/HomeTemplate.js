import { Fragment } from "react";
import { Route } from "react-router-dom";
import Footer from "./Layout/Footer/Footer";
import Header from "./Layout/Header/Header";

export const HomeTemplate = props => {
  let { Component, path } = props;

  return (
    <Route
      exact
      path={path}
      render={propsRoute => {
        return (
          <Fragment>
            <Header />
            <Component {...propsRoute} />
            <Footer />
          </Fragment>
        );
      }}
    />
  );
};
