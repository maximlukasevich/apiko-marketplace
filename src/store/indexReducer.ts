import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import { userReducer } from './user/reducer';
import { notificationsReducer } from './notifications/reducer';
import { productsReducer } from './products/reducer';
import { savedReducer } from './saved/reducer';

const rootReducer = combineReducers({
  user: userReducer,
  notifications: notificationsReducer,
  products: productsReducer,
  saved: savedReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user', 'saved']
}

export type RootState = ReturnType<typeof rootReducer>

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(persistedReducer, compose(applyMiddleware(thunk)))
const persistor = persistStore(store);

export { store, persistor }