import * as axios from 'axios';

const instance = axios.create({
    baseURL: 'https://swapi.co/api/people/',
});

export const actorsAPI = {
    getActors() {
        return instance.get()
            .then(response => {
                return response.data.results
            });
    }
};


