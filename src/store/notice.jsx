import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const notice = createSlice({
  name: "notice",
  initialState,
  reducers: {
    setNotice: (state, action) => {
      state = state.push(action.payload);
    },
  },
});

export const { setNotice } = notice.actions;

export default notice;
