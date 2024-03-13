import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const notice = createSlice({
  name: "notice",
  initialState,
  reducers: {
    setNotice: (state, action) => {
      return (state = action.payload);
    },
  },
});

export const { setNotice } = notice.actions;

export default notice;
