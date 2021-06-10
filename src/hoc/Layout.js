import React, {useEffect} from 'react'
import classes from './Layout.module.scss'
import Header from "../containers/Header/Header";
import Footer from "../containers/Footer/Footer";
import {useDispatch, useSelector} from "react-redux";
import Drawer from "../containers/Drawer/Drawer";
import {closeDrawer, closeMainMenu} from "../redux/actions/appActions";
import Menu from "../components/Menu/Menu";

const Layout = (props) => {

    const component = useSelector(state => state.app.component)
    const isMenu = useSelector(state => state.app.isMenuOpened)

    const dispatch = useDispatch()

    useEffect(() => {
        if (component) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'scroll'
        }
    }, [component])

    const closeDrawerHandler = () => {
        if (isMenu) {
            dispatch(closeDrawer())
            dispatch(closeMainMenu())
        } else {
            dispatch(closeDrawer())
        }
    }

    return(
        <div className={classes.Layout}>
            {
                component &&
                <Drawer onClose={closeDrawerHandler}>
                    {component()}
                </Drawer>
            }

            <Menu isMenu={isMenu}/>

            <Header/>

            <main>
                {props.children}
            </main>

            <Footer/>
        </div>
    )
}

export default Layout