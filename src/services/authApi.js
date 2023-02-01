import api from "./api";

export async function signUp(body, token) {
  const response = await api.post("/users", body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}
export async function login(body, token) {
  const response = await api.post("/auth/login", body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}
