import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import { Header, Footer, Flex } from "./components";

import { NotFound } from "./views";

import { getCurrentUser } from "./utils";

const Layout = props => {
  return (
    <Flex minHeight="100vh">
      <Header />
      {props.children}
      <Footer />
    </Flex>
  );
};

const DefaultRoute = props => {
  const { component: Component, path, isAuthenticated, ...rest } = props;

  const currentUser = getCurrentUser();

  if (isAuthenticated && !currentUser) {
    return <NotFound />;
  }

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
