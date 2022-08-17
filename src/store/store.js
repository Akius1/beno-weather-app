// import { applyMiddleware, compose } from "redux";
import { combineReducers, configureStore, getDefaultMiddleware  } from "@reduxjs/toolkit";
import { persistReducer, persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import storage from "redux-persist/lib/storage";
// import thunk from "redux-thunk";
import selectedCapitalReducer from "./reducers/capital.reducers";
// import weatherReducer from "./reducers/weather.reducer";
import weatherSlice from "./slice/weather.slice";

const reducer = combineReducers({
  capital_reducer: selectedCapitalReducer,
  // weather_reducer: weatherReducer,
  weather: weatherSlice,
});

// const middleware = [thunk];

const persistConfig = {
  key: "beno",
  blacklist: ["form"],
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

let store;

// const composeEnhancers =
//   typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//     ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
//         // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
//       })
//     : compose;

// const enhancer = composeEnhancers(applyMiddleware(...middleware));
store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

const persistor = persistStore(store);

export { store, persistor };

export const setupStore = preloadedState => {
  return configureStore({
    reducer: persistedReducer,
    preloadedState
  })
}
