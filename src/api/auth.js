import axios from 'axios';

axios.defaults.baseURL = 'https://proj-node-films.herokuapp.com/api';
// axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

export const registerUser = async function (body) {
  try {
    const response = await axios.post(`/auth/signup`, body);
    return response.data;
  } catch (error) {
    throw new Error(error);
  } finally {
  }
};

export const loginUser = async function (body) {
  try {
    const response = await axios.post(`/auth/signin`, body);
    return response.data;
  } catch (error) {
    throw new Error(error);
  } finally {
  }
};
