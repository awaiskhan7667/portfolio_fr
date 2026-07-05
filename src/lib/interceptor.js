import axios from "axios";
import { toast } from "react-hot-toast";

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  withCredentials: true,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

// Response interceptor (no request token needed)
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      const { status, data } = error.response;
      const errorMessage = data?.message || getDefaultErrorMessage(status);

      toast.error(errorMessage);
    } else {
      toast.error("Network error. Please check your connection.");
    }

    return Promise.reject(error);
  }
);

// Default error message helper
function getDefaultErrorMessage(status) {
  switch (status) {
    case 400:
      return "Bad request. Please check the form.";
    case 403:
      return "You do not have permission to perform this action.";
    case 404:
      return "Requested resource not found.";
    case 429:
      return "Too many requests. Please slow down.";
    case 500:
      return "Server error. Please try again later.";
    default:
      return "Something went wrong. Please try again.";
  }
}

export default apiClient;
