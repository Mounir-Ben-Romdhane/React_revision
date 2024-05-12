import axios from "axios";
const url = "http://localhost:3000/data";
export const getallComp = async (id) => {
  id = id || "";
  return await axios.get(`${url}/${id}`);
};
export const addComp = async (event) => {
  return await axios.post(url, event);
};
export const editComp = async (id, event) => {
  return await axios.put(`${url}/${id}`, event);
};
export const deleteComp = async (id) => {
  return await axios.delete(`${url}/${id}`);
};
