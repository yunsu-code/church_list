import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import basicList from "./basicList";
import event from "./event";
import notice from "./notice";

const reducers = combineReducers({
  basicList: basicList.reducer,
  notice: notice.reducer,
  event: event.reducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }), //RTK non-serializable value 오류 해결
});

export default store;
