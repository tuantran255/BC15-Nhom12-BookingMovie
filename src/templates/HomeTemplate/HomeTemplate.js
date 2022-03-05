import { Fragment, useEffect } from "react";
import { Route } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "./Layout/Footer/Footer";

export const HomeTemplate = (props) => {
  let { Component, path } = props;

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <Route
      exact
      path={path}
      render={(propsRoute) => {
        return (
          <Fragment>
            <Header isHomePage={true} />
            <Component {...propsRoute} />
            <Footer />
          </Fragment>
        );
      }}
    />
  );
};
