import axios from "axios";

export const callRegisterUserApi = async (formData) => {
  const response = await axios.post(
    "http://localhost:5000/api/user/register",
    formData,
    { withCredentials: true }
  );

  return response?.data;
};

export const callLoginUserApi = async (formData) => {
  const response = await axios.post(
    "http://localhost:5000/api/user/login",
    formData,
    { withCredentials: true }
  );

  return response?.data;
};

export const callUserAuthApi = async () => {
  const response = await axios.post(
    "http://localhost:5000/api/user/auth",
    {},
    { withCredentials: true }
  );

  return response?.data;
};

export const callLogoutApi = async () => {
  const response = await axios.post(
    "http://localhost:5000/api/user/logout",
    {},
    { withCredentials: true }
  );

  return response?.data;
};

export const addNewTaskApi = async (formData) => {
  const response = await axios.post(
    "http://localhost:5000/api/task/add-new-task",
    formData
  );

  return response?.data;
};

export const getAllTaskApi = async (getCurrentUserId) => {
  const response = await axios.get(
    `http://localhost:5000/api/task/get-all-tasks-by-user-id/${getCurrentUserId}`
  );

  return response?.data;
};
