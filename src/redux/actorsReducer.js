import {actorsAPI} from '../api/api';

const SET_ACTORS = 'SET_ACTORS';
const ADD_NEW_ACTOR = 'ADD_NEW_ACTOR';
const UPDATE_NEW_ACTOR_NAME_BODY = 'UPDATE_NEW_ACTOR_NAME_BODY';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const DELETE_NEW_ACTOR = 'DELETE_NEW_ACTOR';
const DELETE_ACTOR = 'DELETE_ACTOR';

let initialState = {
    actors: [],
    isFetching: false,
    newActorNameBody: '',
    newActors: []
};

const actorsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ACTORS:
            return {...state, actors: action.actors};
        case ADD_NEW_ACTOR:
            return {
                ...state,
                newActors: [...state.newActors, {id: state.newActors.length + 1, name: state.newActorNameBody}],
                newActorNameBody: ''

            };
        case UPDATE_NEW_ACTOR_NAME_BODY:
            return {...state, newActorNameBody: action.body};
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching};
        case DELETE_NEW_ACTOR:
            return {
                ...state,
                newActors: [...state.newActors.filter(a => a.id !== action.actorId)]
            };
        case DELETE_ACTOR:
            return {
                ...state,
                actors: [...state.actors.filter(a => a.name !== action.actorName)]
            };
        default:
            return state;
    }
};

export const setActors = (actors) => ({type: SET_ACTORS, actors});
export const addNewActor = () => ({type: ADD_NEW_ACTOR});
export const updateNewActorNameBody = (body) => ({type: UPDATE_NEW_ACTOR_NAME_BODY, body});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const deleteActor = (actorName) => ({type: DELETE_ACTOR, actorName});
export const deleteNewActor = (actorId) => ({type: DELETE_NEW_ACTOR, actorId});

export const getActors = () => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        actorsAPI.getActors()
            .then(data => {
                dispatch(toggleIsFetching(false));
                dispatch(setActors(data));
            });
    }
};

export default actorsReducer;