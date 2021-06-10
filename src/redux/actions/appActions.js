import {OPEN_DRAWER, CLOSE_DRAWER, OPEN_MAIN_MENU, CLOSE_MAIN_MENU} from "../types";

export const openDrawer = component => {

    return {
        type: OPEN_DRAWER,
        component
    }
}

export const closeDrawer = () => {
    return {
        type: CLOSE_DRAWER
    }
}

export const openMainMenu = () => {
    return {
        type: OPEN_MAIN_MENU
    }
}

export const closeMainMenu = () => {
    return {
        type: CLOSE_MAIN_MENU
    }
}