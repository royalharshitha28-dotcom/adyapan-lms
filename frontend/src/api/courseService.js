import axios from "./axios";

export const getCourses = async () => {
  const response = await axios.get("courses/");
  return response.data;
};