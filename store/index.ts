import { createWrapper } from "next-redux-wrapper";
import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { baseApiSlice } from "./api/base";
import { authSlice } from "./slices/authSlice";

const store = configureStore({
	reducer: {
		[baseApiSlice.reducerPath]: baseApiSlice.reducer,
		[authSlice.name]: authSlice.reducer,
	},

	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(baseApiSlice.middleware),
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export type RootState = ReturnType<typeof store.getState>;

export const wrapperStore = () => store;

export const wrapper = createWrapper(wrapperStore, {
	debug: process.env.NODE_ENV === "development", // Console debug output only in development
});
