import axios from 'axios';
import { fetchAuthSession } from 'aws-amplify/auth';

const axiosClient = axios.create({
  baseURL: 'https://your-api-endpoint.com', // Replace with your API URL
});

// This interceptor runs before every request
axiosClient.interceptors.request.use(
  async (config) => {
    try {
      const session = await fetchAuthSession();
      const token = session.tokens?.accessToken?.toString(); // Or idToken

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    } catch (error) {
      console.error("No auth session found", error);
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosClient;