import {OPEN_DRAWER, CLOSE_DRAWER} from "../types";

const initialState = {
    component: null
}

export default function appReducer (state = initialState, action) {
    switch (action.type) {
        case OPEN_DRAWER: {
            return {
                ...state,
                component: action.component
            }
        }
        case CLOSE_DRAWER: {
            return {
                ...state,
                component: null
            }
        }

        default: return state
    }
}