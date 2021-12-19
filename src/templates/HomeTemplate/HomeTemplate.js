import { Fragment } from "react";
import { Route } from "react-router-dom";

export const HomeTemplate = (props) => {
  let { Component, path } = props;

  return (
    <Route
      exact
      path={path}
      render={(propsRoute) => {
        return (
          <Fragment>
            <h1 className="text-center text-white bg-slate-400">Header component</h1>
            <Component {...propsRoute} />
            <footer className="text-center text-white bg-red-400">Footer component</footer>
          </Fragment>
        );
      }}
    />
  );
};
