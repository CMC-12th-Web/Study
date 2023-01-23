import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface Token {
  accessToken: string | null;
  refreshToken: string | null;
}

interface AuthState extends Token {
  isLoggedIn: boolean;
}

const initialState: AuthState = {
  isLoggedIn: false,
  accessToken: null,
  refreshToken: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signIn: (state, action: PayloadAction<Token>) => {
      state.isLoggedIn = true;
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
    },
    signOut: state => {
      state.isLoggedIn = false;
      state.accessToken = null;
      state.refreshToken = null;
    },
  },
});

export const {signIn, signOut} = authSlice.actions;
export default authSlice.reducer;
