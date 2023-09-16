import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import logger from "redux-logger";

const middleWare = [thunk];

/* istanbul ignore next */
if (process.env.NODE_ENV === "development") {
  middleWare.push(logger);
}

const configureStore = (rootReducer) => {
  return createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middleWare))
  );
};

export default configureStore;
