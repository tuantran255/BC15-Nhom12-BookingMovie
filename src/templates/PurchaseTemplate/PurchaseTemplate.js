import { Fragment } from "react";
import { Redirect } from "react-router-dom";
import { Route } from "react-router-dom";
import Header from "../../components/Header/Header";
import { USER_LOGIN } from "../../util/apiSetting";

export const PurchaseTemplate = props => {
  let { Component, path } = props;

  if (!localStorage.getItem(USER_LOGIN)) {
    return <Redirect to="/login" />;
  }

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
