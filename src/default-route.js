import React, { Fragment } from "react";
import { withRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import { Header, Flex } from "./components";

import { NotFound } from "./views";

import { getCurrentUser } from "./utils";

const Layout = props => {
  return (
    <Flex minHeight="100vh">
      <Header />
      {props.children}
    </Flex>
  );
};

const DefaultRoute = props => {
  const {
    component: Component,
    path,
    history,
    isAuthenticated,
    ...rest
  } = props;

  const currentUser = getCurrentUser();

  if ((isAuthenticated && !currentUser) || path === "/") {
    history.push("/login");
  }

  return (
    <Layout>
      <Route {...props} component={() => <Component {...props} />} />
    </Layout>
  );
};

export default withRouter(DefaultRoute);
