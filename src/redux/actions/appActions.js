import {OPEN_DRAWER, CLOSE_DRAWER} from "../types";

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