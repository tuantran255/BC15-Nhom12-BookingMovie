import { Fragment } from "react";
import { Route } from "react-router-dom";
import Header from "./Layout/Header/Header";
import backGroundLogin from "../../assets/images/backgroundlogin.jpg";
export const LoginTemplate = props => {
  let { Component, path } = props;

  return (
    <Route
      exact
      path={path}
      render={propsRoute => {
        return (
          <Fragment>
            <Header />

            <img src={backGroundLogin} alt="" className="w-screen h-screen relative" />
            <Component {...propsRoute} />
          </Fragment>
        );
      }}
    />
  );
};
