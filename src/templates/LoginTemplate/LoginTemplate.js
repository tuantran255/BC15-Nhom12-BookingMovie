import { Fragment } from "react";
import { Route } from "react-router-dom";
import backGroundLogin from "../../assets/images/backgroundlogin.jpg";
import Header from "../../components/Header/Header";
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
