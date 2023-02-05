import api from "./api";
export async function post(body, token) {
  const response = await api.post("/exercise", body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}
