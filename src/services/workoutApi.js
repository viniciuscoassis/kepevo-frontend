import api from "./api"

export async function getAll(token) {
    const response = await api.get('/workout', {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    return response.data;
}