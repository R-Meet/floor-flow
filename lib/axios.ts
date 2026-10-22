import axios from 'axios';
import { toast } from 'sonner';

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'Content-Type': 'application/json'
  },
  withCredentials: true
});

axios.interceptors.response.use(
  response => response,
  error => {
    const message = 
      error.response?.data?.message ?? 
      error?.message ??
      "Something went wrong";

    toast.error(message);
    return Promise.reject(error);
  }
)
