import {
  createSlice
} from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
  },
  reducers: {
    // login 액션이 온 경우
    login: (state, action) => {
      // payload는 컴포넌트에서의 데이터들이 있음. { 다양한 정보들... }
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    }
  }
})

export const {
  login,
  logout
} = userSlice.actions;

export const selectUser = state => state.user.user;

export default userSlice.reducer;