import React from 'react'
import classes from './Header.module.scss'
import photo from '../../img/logo.png'
import {useDispatch} from "react-redux";
import {openDrawer} from "../../redux/actions/appActions";
import Menu from "../../components/Menu/Menu";


const Header = (props) => {

    const dispatch = useDispatch()

    const openBurgerHandler = e => {
        e.preventDefault()

        dispatch(openDrawer(() => <Menu/>))
    }

    return(
        <div className={classes.Header}>
            <div className={classes.container}>
                <img src={photo} alt="img"/>
                <i className="fas fa-bars" onClick={e => openBurgerHandler(e)}/>
            </div>
        </div>     
    )
}

export default Header