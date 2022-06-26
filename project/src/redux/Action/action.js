/** @format */
import { history } from "../../App";
import { message } from "antd";
import { Manage } from "../../services/service";
import {
  DangNhapNDType,
  GetAllProjectType,
  ProjectCategoryType,
} from "../Type/type";

export const DangKyND = (user) => {
  return async (dispatch) => {
    try {
      const result = await Manage.signupSV(user);
      if (result.status === 200) {
        await message.success("Dang ky thanh cong !", 3);
      }
    } catch (error) {
      console.log("error", error);
      console.log("error", error.response?.data);
      message.error("Dang ky khong thanh cong", 3);
    }
  };
};
export const CreateProjectAction = (body) => {
  return async (dispatch) => {
    try {
      const result = await Manage.createProjectSV(body);
      if (result.status === 200) {
        await message.success("Tao project thanh cong !", 3, () => {
          history.push("/getAllProject");
        });
      }
    } catch (error) {
      console.log("error", error);
      console.log("error", error.response?.data);
      message.error("Tao project khong thanh cong", 3);
    }
  };
};

export const DangNhap = (user) => {
  return async (dispatch) => {
    try {
      const result = await Manage.signinSV(user);
      if (result.status === 200) {
        console.log(result.data.content);
        await localStorage.setItem("user", JSON.stringify(result.data.content));
        await dispatch({
          type: DangNhapNDType,
          content: result.data.content,
        });
        await dispatch(GetAllProjectAction());
        message.success("Dang Nhap thanh cong !", 3);
        await history.push("/getallproject");
      }
    } catch (error) {
      message.error(error.response?.data.message, 3);
    }
  };
};
export const ProjectCategoryAction = () => {
  return async (dispatch) => {
    try {
      const result = await Manage.ProjectCategorySV();
      if (result.status === 200) {
        console.log("sussecc");
        console.log(result.data.content);
        dispatch({
          type: ProjectCategoryType,
          pc: result.data.content,
        });
      }
    } catch (error) {
      console.log("error", error);
      console.log("error", error.response?.data);
    }
  };
};

export const GetAllProjectAction = () => {
  return async (dispatch) => {
    try {
      const result = await Manage.getAllProjectSV();
      if (result.status === 200) {
        console.log(result.data.message);
        dispatch({
          type: GetAllProjectType,
          data: result.data.content,
        });
      }
    } catch (error) {
      if (error.status === 401) console.log(error.data.message);
      console.log("error", error);
      console.log("error", error.response?.data);
    }
  };
};
export const SearchGetAllProjectAction = (keyWord) => {
  return async (dispatch) => {
    try {
      const result = await Manage.searchGetAllProjectSV(keyWord);
      if (result.status === 200) {
        console.log(result.data.message);
        dispatch({
          type: GetAllProjectType,
          data: result.data.content,
        });
      }
      if (result.status === 401) console.log(result.data.message);
    } catch (error) {
      console.log("error", error);
      console.log("error", error.response?.data);
    }
  };
};
