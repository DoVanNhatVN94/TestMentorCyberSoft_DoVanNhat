/** @format */

import {
  DangNhapNDType,
  GetAllProjectType,
  ProjectCategoryType,
} from "../Type/type";

const initialValues = {
  user: {},
  pc: [],
  data: [],
};

export const MainReducer = (state = initialValues, action) => {
  switch (action.type) {
    case DangNhapNDType:
      state.user = { ...action.content };
      return { ...state };

    case ProjectCategoryType:
      state.pc = [...action.pc];
      return { ...state };

    case GetAllProjectType:
      state.data = [...action.data];
      return { ...state };
    default:
      return { ...state };
  }
};
