import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api",
});

export const getAllCustumer = () => api.get(`/custumers`);
// export const insertLog = (payload) => api.post(`/log`, payload);
// export const updateLogById = (id, payload) => api.put(`/log/${id}`, payload);
// export const deleteLogById = (id) => api.delete(`/log/${id}`);

const apis = {
  getAllCustumer,
//   getAllLogs,
//   updateLogById,
//   deleteLogById,
};

export default apis;