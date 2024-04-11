import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  주일낮예배: {
    찬송가: {
      name: "찬송가",
      type: "basic",
      value: [],
    },
    성경봉독: {
      name: "성경봉독",
      type: "bible",
      value: "",
    },
    교독문: {
      name: "교독문",
      type: "basic",
      value: "",
    },
    특송: {
      name: "특송",
      type: "select",
      value: "",
    },
  },
  주일찬양예배: {
    찬송가: {
      name: "찬송가",
      type: "basic",
      value: [],
    },
    성경봉독: {
      name: "성경봉독",
      type: "bible",
      value: "",
    },
    기도: {
      name: "기도",
      type: "select",
      value: "",
    },
  },
  수요예배: {
    찬송가: {
      name: "찬송가",
      type: "basic",
      value: [],
    },
    성경봉독: {
      name: "성경봉독",
      type: "bible",
      value: "",
    },
    기도: {
      name: "기도",
      type: "select",
      value: "",
    },
  },
  금요예배: {
    찬송가: {
      name: "찬송가",
      type: "basic",
      value: [],
    },
    성경봉독: {
      name: "성경봉독",
      type: "bible",
      value: "",
    },
    기도: {
      name: "기도",
      type: "select",
      value: "",
    },
  },
  다음주예배위원: {
    주일낮예배기도: {
      name: "주일 낮 예배 기도",
      type: "select",
      value: "",
    },
    수요예배기도: {
      name: "수요예배 기도",
      type: "select",
      value: "",
    },
    금요예배기도: {
      name: "금요예배 기도",
      type: "select",
      value: "",
    },
    특송: {
      name: "특송",
      type: "select",
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
            if (obj[keys].name === "찬송가") {
              obj[keys].value = action.payload.get(key + keys).split(",");
            } else {
              obj[keys].value = action.payload.get(key + keys);
            }
          });
        });
      }
    },
  },
});

export const { setValue } = basicList.actions;

export default basicList;
