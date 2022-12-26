import { Outlet, Link } from "react-router-dom"

import './nav.styles.scss'
import {ReactComponent as CrownLogo} from '../../assets/crown.svg'

const Nav = () => {

    return (
        <>
            <div className="nav" style={{background: 'yellow'}} >
                <Link to='/home' className="logo" >
                    <div className="logoDiv">
                        <CrownLogo className="logo" />
                    </div>
                </Link>
                <div className="navLinks">
                    <Link to='/toys' className="navLink">
                        TOYS
                    </Link>
                </div>

            </div>
            <Outlet />
        </>
    )
}

export default Nav