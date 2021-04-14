import { applyMiddleware, combineReducers, createStore } from "redux";
import { chatsReducer } from "./chats/reducer";
import { profileReducer } from "./profile/reducer";
import { messagesReducer } from "./messages/reducer";
import { catFactsReducer } from "./catfacts/reducer";
import thunk from "redux-thunk";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { connectRouter, routerMiddleware } from "connected-react-router";
import { createBrowserHistory } from "history";
import { newtonReducer } from "./newton/reducer";

const persistConfig = {
	key: "GBMESSENGER",
	storage,
};

const composeEnchancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const history = createBrowserHistory();

const persistedReducer = persistReducer(
	persistConfig,
	combineReducers({
		router: connectRouter(history),
		profile: profileReducer,
		chats: chatsReducer,
		messages: messagesReducer,
		catfacts: catFactsReducer,
		newton: newtonReducer,
	})
);

export const store = createStore(persistedReducer, composeEnchancers(applyMiddleware(routerMiddleware(history)), applyMiddleware(thunk)));

export const persistor = persistStore(store);
