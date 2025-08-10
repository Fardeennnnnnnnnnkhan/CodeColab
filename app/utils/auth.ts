export interface User {
  id: string;
  username: string;
  email: string;
}

export interface AuthResponse {
  _id: string;
  username: string;
  email: string;
  token: string;
}

// Get user from localStorage
export const getUser = (): User | null => {
  if (typeof window === "undefined") return null;

  const userStr = localStorage.getItem("user");
  if (!userStr) return null;

  try {
    return JSON.parse(userStr);
  } catch {
    return null;
  }
};

// Get token from localStorage
export const getToken = (): string | null => {
  if (typeof window === "undefined") return null;
  return localStorage.getItem("token");
};

// Set user data in localStorage
export const setUser = (user: User, token: string): void => {
  if (typeof window === "undefined") return;

  localStorage.setItem("user", JSON.stringify(user));
  localStorage.setItem("token", token);
};

// Clear user data from localStorage
export const clearUser = (): void => {
  if (typeof window === "undefined") return;

  localStorage.removeItem("user");
  localStorage.removeItem("token");
};

// Check if user is authenticated
export const isAuthenticated = (): boolean => {
  const token = getToken();
  return !!token;
};

// Logout user
export const logout = (): void => {
  clearUser();
  // You can add additional cleanup here (e.g., redirect to login page)
  if (typeof window !== "undefined") {
    window.location.href = "/login";
  }
};

// Create auth headers for API requests
export const getAuthHeaders = (): Record<string, string> => {
  const token = getToken();
  return {
    "Content-Type": "application/json",
    ...(token && { Authorization: `Bearer ${token}` }),
  };
};
