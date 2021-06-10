import React from 'react'
import classes from './Drawer.module.scss'
import CloseOnEscape from "react-close-on-escape/src";

const Drawer = (props) => {

    const onClickHandler = e => {
        e.preventDefault()
        props.onClose()
    }

    return(
        <div className={classes.Drawer} onClick={e => onClickHandler(e)}>
            <CloseOnEscape onEscape={props.onClose}>
                {props.children}
            </CloseOnEscape>
        </div>
    )
}

export default Drawer