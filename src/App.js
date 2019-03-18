import React, { Component, Fragment } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import { PersistGate } from "redux-persist/integration/react";

import configureStore from "./redux/configureStore";

import { Auth, Home, Chat, AllChat, NotFound } from "./views";
import rootReducer from "./redux/reducers";
import DefaultRoute from "./default-route";

import GlobalStyles from "./styles/global";

import theme from "./theme";

let { store, persistor } = configureStore();
// Export the store object for use elsewhere
export { store };

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate
          loading={props => <div>loading...</div>}
          persistor={persistor}
        >
          {/* Global Style reset */}
          <GlobalStyles />
          <ThemeProvider theme={theme}>
            <BrowserRouter>
              <div>
                <DefaultRoute exact path="/login" component={Auth} />
                <DefaultRoute
                  exact
                  path="/chat"
                  component={AllChat}
                  isAuthenticated
                />
                <DefaultRoute
                  path="/chat/:roomID([0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12})"
                  component={Chat}
                  isAuthenticated
                />
                <DefaultRoute path="/" component={NotFound} />
              </div>
            </BrowserRouter>
          </ThemeProvider>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
