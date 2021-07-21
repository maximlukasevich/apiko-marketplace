import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import { userReducer } from './user/reducer';
import { notificationsReducer } from './notifications/reducer';

const rootReducer = combineReducers({
  user: userReducer,
  notifications: notificationsReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user']
}

export type RootState = ReturnType<typeof rootReducer>

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(persistedReducer, compose(applyMiddleware(thunk)))
const persistor = persistStore(store);

export { store, persistor }