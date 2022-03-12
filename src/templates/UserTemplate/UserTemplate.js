import { Fragment } from "react";
import { Route } from "react-router-dom";
import Header from "../../components/Header/Header";
export const UserTemplate = props => {
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
          </Fragment>
        );
      }}
    />
  );
};
