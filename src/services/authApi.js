import api from "./api";

export async function signUp(body) {
  const response = await api.post("/users", body);

  return response.data;
}
export async function login(body) {
  const response = await api.post("/auth/login", body);

  return response.data;
}
