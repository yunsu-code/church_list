import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: {
    type: "basic",
    value: "",
  },
  bible: {
    type: "bible",
    value: "",
  },
  email: {
    type: "select",
    value: "",
  },
  litany: {
    type: "basic",
    value: "",
  },
  username: {
    type: "basic",
    value: "",
  },
};

const basicList = createSlice({
  name: "basicList",
  initialState,
  reducers: {
    setValue: (state, action) => {
      state.id.value = action.payload.get("id");
      state.email.value = action.payload.get("email");
      state.bible.value = action.payload.get("bible");
      state.username.value = action.payload.get("username");
      state.litany.value = action.payload.get("litany");
    },
  },
});

export const { setValue } = basicList.actions;

export default basicList;
