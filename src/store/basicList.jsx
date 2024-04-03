import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  section01: {
    id: {
      name: "Id",
      type: "basic",
      value: "",
    },
    bible: {
      name: "bible",
      type: "bible",
      value: "",
    },
    user: {
      name: "users",
      type: "select",
      value: "",
    },
  },
  section02: {
    id: {
      name: "Id22",
      type: "basic",
      value: "",
    },
    bible: {
      name: "bible222",
      type: "bible",
      value: "",
    },
    user: {
      name: "users2",
      type: "basic",
      value: "",
    },
  },
  section03: {
    id: {
      name: "Id33",
      type: "select",
      value: "",
    },
    bible: {
      name: "bible3",
      type: "basic",
      value: "",
    },
    user: {
      name: "users333",
      type: "basic",
      value: "",
    },
  },
};

const basicList = createSlice({
  name: "basicList",
  initialState,
  reducers: {
    setValue: (state, action) => {
      {
        Object.entries(state).map(([key]) => {
          const obj = state[key];
          Object.entries(state[key]).map(([keys]) => {
            console.log(obj[keys].value);
            obj[keys].value = action.payload.get(key + keys);
          });
        });
      }
    },
  },
});

export const { setValue } = basicList.actions;

export default basicList;
