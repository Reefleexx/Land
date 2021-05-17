import React from 'react'
import classes from './OfferItem.module.scss'

const OfferItem = (props) => {
    return (
        <div className={classes.OfferItem}>
           <div className={classes.wrapper}>
               <div className={classes.photo_container}>
                   <img src={props.photo} alt={props.title}/>
               </div>

               <div className={classes.info_block}>
                   <div className={classes.title}>
                       {
                           props.title.length > 23 ?
                               props.title.slice(0, 23) + '...':
                               props.title
                       }
                   </div>

                   <div className={classes.price}>
                       {props.price}грн
                   </div>
               </div>
           </div>
        </div>
    )
}

export default OfferItem