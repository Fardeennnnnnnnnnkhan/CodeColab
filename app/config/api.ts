// API Configuration
export const API_CONFIG = {
  // Backend server URL - change this to match your backend
  BACKEND_URL: process.env.BACKEND_URL || "http://localhost:5000",

  // API endpoints
  ENDPOINTS: {
    AUTH: {
      LOGIN: "/api/auth/login",
      REGISTER: "/api/auth/register",
      FORGOT_PASSWORD: "/api/auth/forgot-password",
      RESET_PASSWORD: "/api/auth/reset-password",
    },
  },

  // Request timeout in milliseconds
  TIMEOUT: 10000,
};

// Helper function to get full backend URL
export const getBackendUrl = (endpoint: string): string => {
  return `${API_CONFIG.BACKEND_URL}${endpoint}`;
};
