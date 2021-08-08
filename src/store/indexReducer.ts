import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import { viewerReducer } from './viewer/reducer';
import { notificationsReducer } from './notifications/reducer';
import { productsReducer } from './products/reducer';
import { savedReducer } from './saved/reducer';
import { searchReducer } from './search/reducer';
import { searchSuggestionsReducer } from './search-suggestions/reducer';
import { searchRecentsReducer } from './search-recents/reducer';
import { userReducer } from './user/reducer';
import { chatsReducer } from './chats/reducer';
import { messagesReducer } from './messages/reducer';

const rootReducer = combineReducers({
  viewer: viewerReducer,
  notifications: notificationsReducer,
  products: productsReducer,
  saved: savedReducer,
  search: searchReducer,
  searchSuggestions: searchSuggestionsReducer,
  searchRecents: searchRecentsReducer,
  user: userReducer,
  chats: chatsReducer,
  messages: messagesReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['currentUser', 'searchRecents']
}

export type RootState = ReturnType<typeof rootReducer>

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(persistedReducer, compose(applyMiddleware(thunk)))
const persistor = persistStore(store);

export { store, persistor }