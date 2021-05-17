import React from 'react'
import classes from './Footer.module.scss'
import instIcon from '../../img/instIcon.png'
import facebookIcon from '../../img/facebookIcon.png'
import {NavLink} from "react-router-dom";


const Footer = (props) => {

    const links = [
        {text: 'Home', to: '/'},
        {text: 'Help', to: '/help'},
        {text: 'Contact us', to: '/contact-us'}
    ]

    const renderLinks = () => {
        return (
            <>
                {links.map(link => {
                    return (
                        <NavLink
                            className={classes.help_btn}
                            to={link.to}
                            key={link.text}
                        >{link.text}</NavLink>
                    )
                })}
            </>
        )
    }

    return(
        <div className={classes.Footer}>
            <div className={classes.container}>
                <div className={classes.help_btns}>
                    {
                        renderLinks()
                    }
                </div>

                <span className={classes.vl}/>

                <div className={classes.block}>
                    <span>Follow us</span>

                    <hr/>

                    <div className={classes.items}>
                        <img src={instIcon} alt=""/>
                        <img src={facebookIcon} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer