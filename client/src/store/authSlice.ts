import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
    userToken: string | null;
    isLoading: boolean;
    error: string | null;
}

const initialState: AuthState = {
    userToken: null,
    isLoading: false,
    error: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginStart: (state) => {
            state.isLoading = true;
            state.error = null;
        },
        loginSuccess: (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.userToken = action.payload;
        },
        loginFailure: (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        logout: (state) => {
            state.userToken = null;
        }
    }
});

export const { loginStart, loginSuccess, loginFailure, logout } = authSlice.actions;
export default authSlice.reducer;