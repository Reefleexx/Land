import React from 'react'
import classes from './Popular.module.scss'
import Separator from "../Separator/Separator";
import photo from '../../img/feature-3.png'
import OfferItem from "../OfferItem/OfferItem";

const Popular = (props) => {

    const popularItems = [
        {
            photo: photo,
            title: 'Toothbrush test one',
            price: 800
        },
        {
            photo: photo,
            title: 'Toothbrush test one',
            price: 800
        },
        {
            photo: photo,
            title: 'wwwww wwwww wwwwwww wwwwwwwwwwwwwwwwwwwww',
            price: 800
        }
    ]

    return(
        <div className={classes.Popular}>
            <div className={classes.wrapper}>
                <Separator text={"Популярные модели"} class={['pop_color']}/>

                <div className={classes.popular_items}>
                    {
                        popularItems.map((item, i) => {
                            return (
                                <OfferItem
                                    title={item.title}
                                    price={item.price}
                                    photo={item.photo}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Popular