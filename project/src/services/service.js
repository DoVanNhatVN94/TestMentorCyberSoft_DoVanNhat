/** @format */

import { http } from "../util/settingAxios";

class service {
  signupSV = (user) => {
    return http.post("/api/Users/signup", user);
  };
  signinSV = (user) => {
    return http.post("/api/Users/signin", user);
  };
  ProjectCategorySV = () => {
    return http.get("/api/ProjectCategory");
  };
  createProjectSV = (body) => {
    return http.post("/api/Project/createProject", body);
  };
  searchGetAllProjectSV = (keyWord) => {
    return http.get(`/api/Project/getAllProject?keyword=${keyWord}`);
  };
  getAllProjectSV = () => {
    return http.get(`/api/Project/getAllProject`);
  };
}
export const Manage = new service();
