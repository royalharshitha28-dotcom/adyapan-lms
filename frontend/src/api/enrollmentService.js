import axios from "axios";

const API = "http://127.0.0.1:8000/api/enrollments/";

export const createEnrollment = async (data) => {

  const response = await axios.post(
    API,
    data
  );

  return response.data;
};

export const getEnrollments = async () => {

  const response = await axios.get(API);

  return response.data;
};