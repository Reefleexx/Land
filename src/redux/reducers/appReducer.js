import {OPEN_DRAWER, CLOSE_DRAWER, OPEN_MAIN_MENU, CLOSE_MAIN_MENU} from "../types";

const initialState = {
    component: null,
    isMenuOpened: false
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
        case OPEN_MAIN_MENU: {
            return {
                ...state,
                isMenuOpened: true
            }
        }
        case CLOSE_MAIN_MENU: {
            return {
                ...state,
                isMenuOpened: false
            }
        }

        default: return state
    }
}