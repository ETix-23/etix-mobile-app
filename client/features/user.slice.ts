// src/features/user/userSlice.ts
import { RootState } from "@/store/store";
import { UserState } from "@/types/user";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: UserState = {
  token: null,
  user: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
    },
    clearUser: (state) => {
      state.token = null;
      state.user = null;
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export const loggedInUser = (state : RootState) => state.user;
export default userSlice.reducer;
