import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import { Header, Footer, TriangleBackground } from "./components";

const Layout = props => {
  return (
    <Fragment>
      <TriangleBackground />
      <Header />
      {props.children}
      <Footer />
    </Fragment>
  );
};

const DefaultRoute = props => {
  const { component: Component, path, ...rest } = props;

  return (
    <Route
      path={path}
      component={props => {
        return (
          <Layout>
            <Component />
          </Layout>
        );
      }}
      {...rest}
    />
  );
};

export default DefaultRoute;
