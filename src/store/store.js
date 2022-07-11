import { applyMiddleware, combineReducers, compose, createStore,  } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import selectedCapitalReducer from './reducers/capital.reducers';
import weatherReducer from './reducers/weather.reducer';

const reducer = combineReducers({
  capital_reducer: selectedCapitalReducer, 
  weather_reducer: weatherReducer,
});

const middleware = [thunk];

const persistConfig = {
  key: 'beno',
  blacklist: ['form'],
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

let store;

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const enhancer = composeEnhancers(
  applyMiddleware(...middleware)
);
store = createStore(persistedReducer, enhancer);

const persistor = persistStore(store);

export { store, persistor };
