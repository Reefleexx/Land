import React from 'react'
import classes from './Advantages.module.scss'

const Advantages = (props) => {
    return(
        <div className={classes.Advantages}>
            <div className={classes.wrapper}>
                {
                    props.items.map((item, i) => {
                        return (
                            <div key={i}>
                                <div className={classes.adv_item} >
                                    <div className={classes.circle_big}>
                                        {
                                            item.header &&
                                            <div className={classes.circle_small}>
                                                <span className={classes.text_in_circle}>
                                                    {item.header}
                                                </span>
                                            </div>
                                        }
                                        {
                                            item.icon && <i className={item.icon}/>
                                        }
                                    </div>

                                    <div className={classes.adv_item_text}>
                                    <span>
                                        {item.text}
                                    </span>
                                    </div>
                                </div>

                                {
                                    (i < props.items.length - 1) && <hr/>
                                }
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Advantages