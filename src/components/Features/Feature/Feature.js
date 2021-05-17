import React from 'react'
import classes from './Feature.module.scss'
import Separator from "../../Separator/Separator";

const Feature = (props) => {
    return(
        <div className={classes.Feature}>
            <div className={classes.wrapper}>
                <Separator
                    text={props.header}
                    class={props.isShadowSep && ['shadow-top']}
                />

                <div className={classes.container}>
                    <span className={classes.heady}>{props.heady}</span>

                    <hr className={classes.header_hr}/>

                    <div className={classes.text}>
                        {props.text}
                    </div>

                    <div className={classes.shadow}/>
                    <div className={classes.photo_container}>
                        <img src={props.photo}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Feature