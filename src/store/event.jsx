import { createSlice } from "@reduxjs/toolkit";

const initialState = "";

const event = createSlice({
  name: "event",
  initialState,
  reducers: {
    setEvent: (state, action) => {
      return (state = action.payload);
    },
  },
});

export const { setEvent } = event.actions;

export default event;
