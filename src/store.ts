import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import logger from "redux-logger";
import rootReducer from "./redux/reducer";

const middleWare = [thunk];

if (process.env.NODE_ENV === "development") {
  middleWare.push(logger);
}

const configureStore = () =>
  createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleWare)));

export default configureStore;
