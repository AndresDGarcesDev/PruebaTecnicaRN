import axios from 'axios';

const URL_API_SERVER = "https://picsum.photos/v2";

const apiServiceImg = axios.create({
    baseURL: URL_API_SERVER,
    headers: {
      "Content-Type": "application/json",
    },
});

export const apiService = {
    getAllListImages: async() => {
        try {
            const response = await apiServiceImg.get("/list-img");
    
            return response.data;
        } catch (error) {
            return error;
        }
    },

    getImagenById: async(id) => {
        try {
            const response = await apiServiceImg.get(`/id/${id}/info`);

            return response.data;
        } catch (error) {
            return error;
        }
    }
};
