import { request } from "./request";

export interface LoginParams {
  name: string;
  password: string;
}
export const userLogin = async (data: LoginParams) => {
  console.log(data, 111);
  return request({
    url: "/login",
    method: "POST",
    data,
  });
};
