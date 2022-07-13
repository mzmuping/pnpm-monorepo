import request from "./api";

export const userApi = {
  getUser: (id: number) => request.get(`/api/users/${id}`),
  createUser: (data: any) => request.post(`/api/users`, data),
  getUserByUid: () => Promise.resolve(11),
};
