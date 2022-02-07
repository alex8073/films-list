import * as axios from "axios";

const instance = axios.create({
    baseURL: "https://swapi.dev/api/films",
});

export const filmsAPI = {
    getFilms() {
        return instance.get().then((response) => {
            return response.data.results;
        });
    },
};
