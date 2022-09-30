import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import { rootReducer } from "./root-reducer";

const middleWares = [logger];

const composedEnhancers = composeWithDevTools(applyMiddleware(...middleWares));

export const store = createStore(rootReducer, composedEnhancers);
