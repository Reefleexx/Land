import React, {useEffect} from 'react'
import classes from './Layout.module.scss'
import Header from "../containers/Header/Header";
import Footer from "../containers/Footer/Footer";
import {useSelector} from "react-redux";
import Drawer from "../containers/Drawer/Drawer";

const Layout = (props) => {

    const component = useSelector(state => state.app.component)

    useEffect(() => {
        if (component) {
            document.body.style.overflow = 'hidden'
        }
    }, [component])

    return(
        <div className={classes.Layout}>
            {component && <Drawer>{component}</Drawer>}

            <Header/>

            <main>
                {props.children}
            </main>

            <Footer/>
        </div>
    )
}

export default Layout