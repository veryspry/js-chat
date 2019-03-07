import React, { Component, Fragment } from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { createStore } from "redux";
import { Provider } from "react-redux";

import { Auth, Home, Chat } from "./views";
import rootReducer from "./redux/reducers";
import DefaultRoute from "./default-route";

import GlobalStyles from "./styles/global";

import theme from "./theme";

let initialStore = {};
const store = createStore(rootReducer, initialStore);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        {/* Global Style reset */}
        <GlobalStyles />
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Fragment>
              <DefaultRoute exact path="/" component={Home} />
              <DefaultRoute exact path="/login" component={Auth} />
              <DefaultRoute exact path="/chat" component={Chat} />
            </Fragment>
          </BrowserRouter>
        </ThemeProvider>
      </Provider>
    );
  }
}

export default App;
