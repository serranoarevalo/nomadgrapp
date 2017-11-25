import { combineReducers, applyMiddleware, createStore } from "redux";
import { persistStore, persistCombineReducers } from "redux-persist";
import storage from "redux-persist/es/storage";
import thunk from "redux-thunk";
import user from "./modules/user";
import ui from "./modules/ui";

const middlewares = [thunk];

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["ui"]
};

const reducer = persistCombineReducers(persistConfig, {
  user,
  ui
});

const configureStore = () => {
  let store = createStore(reducer, applyMiddleware(...middlewares));
  let persistor = persistStore(store);
  return { store, persistor };
};

export default configureStore;
