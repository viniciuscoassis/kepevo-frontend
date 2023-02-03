import api from "./api";

export async function getAll(token) {
  const response = await api.get("/workout/musclegroups", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}
