import React, { Fragment } from "react";
import { withRouter } from "react-router-dom";
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
  const {
    component: Component,
    path,
    history,
    isAuthenticated,
    ...rest
  } = props;

  const currentUser = getCurrentUser();

  if (isAuthenticated && !currentUser) {
    // return <NotFound />;
    console.log(
      "No current user for this route that requires authentication",
      props
    );
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

export default withRouter(DefaultRoute);
