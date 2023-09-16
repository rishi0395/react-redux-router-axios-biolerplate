import React from "react";
import { render } from "@testing-library/react";

import { Provider } from "react-redux";
// As a basic setup, import your same slice reducers

import rootReducer from "./redux/reducer";
import configureStore from "./store";
import { BrowserRouter } from "react-router-dom";

export function renderWithProviders(
  ui,
  {
    preloadedState = {},
    store = configureStore(rootReducer),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return (
      <Provider store={store}>
        <BrowserRouter>{children}</BrowserRouter>
      </Provider>
    );
  }

  // Return an object with the store and all of RTL's query functions
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}
