/** @format */

import { DangNhapNDType, ProjectCategoryType } from "../Type/type";

const initialValues = {
  user: {},
  pc: [],
};

export const MainReducer = (state = initialValues, action) => {
  switch (action.type) {
    case DangNhapNDType:
      state.user = { ...action.content };
      return { ...state };

    case ProjectCategoryType:
      state.pc = [...action.pc];
      return { ...state };
    default:
      return { ...state };
  }
};
