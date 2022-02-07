import { filmsAPI } from "../api/api";

const SET_FILMS = "SET_FILMS";
const ADD_NEW_FILM = "ADD_NEW_FILM";
const UPDATE_NEW_FILM_NAME_BODY = "UPDATE_NEW_FILM_NAME_BODY";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const DELETE_NEW_FILM = "DELETE_NEW_FILM";
const DELETE_FILM = "DELETE_FILM";

let initialState = {
    films: [],
    isFetching: false,
    newFilmNameBody: "",
    newFilms: [],
};

const filmsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FILMS:
            return { ...state, films: action.films };
        case ADD_NEW_FILM:
            return {
                ...state,
                newFilms: [...state.newFilms, { id: state.newFilmNameBody, title: state.newFilmNameBody }],
                newFilmNameBody: "",
            };
        case UPDATE_NEW_FILM_NAME_BODY:
            return { ...state, newFilmNameBody: action.body };
        case TOGGLE_IS_FETCHING:
            return { ...state, isFetching: action.isFetching };
        case DELETE_NEW_FILM:
            return {
                ...state,
                newFilms: [...state.newFilms.filter((a) => a.title !== action.title)],
            };
        case DELETE_FILM:
            return {
                ...state,
                films: [...state.films.filter((a) => a.title !== action.title)],
            };
        default:
            return state;
    }
};

export const setFilms = (films) => ({ type: SET_FILMS, films });
export const addNewFilm = () => ({ type: ADD_NEW_FILM });
export const updateNewFilmNameBody = (body) => ({ type: UPDATE_NEW_FILM_NAME_BODY, body });
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });
export const deleteFilm = (title) => ({ type: DELETE_FILM, title });
export const deleteNewFilm = (title) => ({ type: DELETE_NEW_FILM, title });

export const getFilms = () => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        filmsAPI.getFilms().then((data) => {
            dispatch(toggleIsFetching(false));
            dispatch(setFilms(data));
        });
    };
};

export default filmsReducer;
