import axios from 'axios'

const initialState = {
    user: {},
    events:[]
}

const UPDATE_USER = "UPDATE_USER";
const UPDATE_EVENTS = "UPDATE_EVENTS";
// const UPDATE_USER = "UPDATE_USER";
// const UPDATE_USERNAME = "UPDATE_USERNAME";
// const UPDATE_FIRSTNAME = "UPDATE_FIRSTNAME";
// const UPDATE_LASTNAME = "UPDATE_LASTNAME";
// const UPDATE_AGE = "UPDATE_AGE";
// const UPDATE_LOCATION = "UPDATE_LOCATION";
// const UPDATE_GENDER = "UPDATE_GENDER";
// const UPDATE_IMAGE = "UPDATE_IMAGE";
// const UPDATE_BIO = "UPDATE_BIO";
// const UPDATE_CURRENTUSER = "UPDATE_CURRENTUSER";
// const UPDATE_MESSAGE = "UPDATE_MESSAGE";

export function updateUser(user) {
    return {
        type: UPDATE_USER,
        payload: user

    }
}

export function updateEvents(events) {
    return {
        type: UPDATE_EVENTS,
        payload: events
    };
}

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case UPDATE_USER:
            return { ...state, user: action.payload}
        case UPDATE_EVENTS:
            return { ...state, events: action.payload}
        default: 
            return state
    };
}


