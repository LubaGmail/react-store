import { Outlet, Link } from "react-router-dom"
import { useContext } from 'react';

import './nav.styles.scss'
import { ReactComponent as CrownLogo } from '../../assets/crown.svg'
import { UserContext } from '../../contexts/user-context';

const Nav = () => {
    const { currentUser, setCurrentUser } = useContext(UserContext);

    return (
        <>
            <div className="nav" style={{background: '#F0F8FF'}} >
                <Link to='/home' className="logo" >
                    <div className="logoDiv">
                        <CrownLogo className="logo" />
                    </div>
                </Link>
                {
                    currentUser && (
                        <div className="navLinks">
                            currentUser: {JSON.stringify(currentUser['email'])}
                        </div>
                    )
                }

                <div className="navLinks">
                    <Link to='/test' className="navLink">
                        Test
                    </Link>
                    <Link to='/auth' className="navLink">
                        SIGN IN
                    </Link>
                </div>

            </div>
            <Outlet />
        </>
    )
}

export default Nav