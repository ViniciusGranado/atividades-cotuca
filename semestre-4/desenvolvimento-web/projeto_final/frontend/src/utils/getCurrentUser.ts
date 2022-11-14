import { LoginResponse } from "../models/models";

export const getCurrentUser = () : LoginResponse | null => {
  const user = localStorage.getItem("user")

  if (!user) return null;

  return JSON.parse(user);
};