import axios from 'axios'

const initialState = {
    user: {},
    events:[],
    currEvent: null
}

const UPDATE_USER = "UPDATE_USER";
const UPDATE_EVENTS = "UPDATE_EVENTS";
const UPDATE_CURR_EVENT = "UPDATE_CURR_EVENT";


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

export function updateCurrEvent(currEvent) {
    return {
        type: UPDATE_CURR_EVENT,
        payload: currEvent
    };
}




export default function reducer(state = initialState, action) {
    switch(action.type) {
        case UPDATE_USER:
            return { ...state, user: action.payload}
        case UPDATE_EVENTS:
            return { ...state, events: action.payload}
        case UPDATE_CURR_EVENT:
            return { ...state, currEvent: action.payload}
        default: 
            return state
    };
}


