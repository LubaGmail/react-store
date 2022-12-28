import { Outlet, Link } from "react-router-dom"

import './nav.styles.scss'
import {ReactComponent as CrownLogo} from '../../assets/crown.svg'

const Nav = () => {

    return (
        <>
            <div className="nav" style={{background: '#F0F8FF'}} >
                <Link to='/home' className="logo" >
                    <div className="logoDiv">
                        <CrownLogo className="logo" />
                    </div>
                </Link>
                <div className="navLinks">
                    <Link to='/shop' className="navLink">
                        SHOP
                    </Link>
                    <Link to='/sign-in' className="navLink">
                        SIGN IN
                    </Link>
                </div>

            </div>
            <Outlet />
        </>
    )
}

export default Nav