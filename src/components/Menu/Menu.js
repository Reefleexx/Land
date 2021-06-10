import React from 'react'
import classes from './Menu.module.scss'

const Menu = (props) => {

    const type = props.isMenu ? 'open' : 'close'

    return(
        <div className={classes.Menu + ' ' + classes[type]}>
            HI
        </div>
    )
}

export default Menu