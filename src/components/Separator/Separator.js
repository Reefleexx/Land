import React from 'react'
import classes from './Separator.module.scss'

const Separator = (props) => {

    const cls = [
        classes.Separator
    ]

    if (props.class) {
        const types = props.class.map(type => classes[type])
        cls.push(types)
    }

    return(
        <div className={cls.join(' ')}>
            <div className={classes.wrapper}>
                <hr className={classes.hr_sep}/>

                <span className={classes.separator_text}>
                    {props.text}
                </span>

                <hr className={classes.hr_sep}/>
            </div>
        </div>
    )
}

export default Separator