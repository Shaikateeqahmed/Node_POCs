import axiosClient from "../authentication/axiosInterceptor";

export const fetchMessage = async () => {
  try {
    const response = await axiosClient.get('/api');
    console.log(response.data);
  } catch (error) {
    console.error("API Error", error);
  }
};