import { baseApiSlice } from "./base";

export interface User {
	id: number;
	name: string;
}

export const authApi = baseApiSlice.injectEndpoints({
	endpoints: (build) => ({
		userLogIn: build.mutation<any, { email: string; password: string }>({
			query: (body) => ({
				url: "auth/login",
				method: "POST",
				body,
			}),
			async onQueryStarted(arg, { dispatch, queryFulfilled }) {
				const result = await queryFulfilled;
				localStorage.setItem("accessToken", JSON.stringify(result.data.token));
				// dispatch(userLoggedIn(result.data.token));
			},
		}),
	}),
	overrideExisting: false,
});

export const { useUserLogInMutation } = authApi;
