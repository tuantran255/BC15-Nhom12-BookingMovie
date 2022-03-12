import { Fragment, useEffect } from "react";
import { Route } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "./Layout/Footer/Footer";

export const HomeTemplate = (props) => {
  let { Component, path, isHomePage } = props;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [Component]);

  return (
    <Route
      exact
      path={path}
      render={(propsRoute) => {
        return (
          <Fragment>
            <Header isHomePage={isHomePage} />
            <Component {...propsRoute} />
            <Footer />
          </Fragment>
        );
      }}
    />
  );
};
