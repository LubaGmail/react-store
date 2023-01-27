import { Outlet, Link } from "react-router-dom"
import { useContext } from 'react';

import { UserContext } from '../../contexts/user-context';
import { CartContext } from '../../contexts/cart-context'
import { signOutUser } from "../../utils/firebase/firebase";
import { ReactComponent as CrownLogo } from '../../assets/crown.svg'
import CartIcon from "../cart-icon/cart-icon";
import CartDropdown from "../cart-dropdown/cart-dropdown";

import './nav.styles.scss'

const Nav = () => {
    const { currentUser, setCurrentUser } = useContext(UserContext);
    const { cartOpen } = useContext(CartContext);
    
    const handleSignout = async () => {
        await signOutUser();
        setCurrentUser(null)
    }

    return (
        <>
            <div className="nav" >
                <Link to='/home' className="logo" >
                    <div className="logoDiv">
                        <CrownLogo className="logo" />
                    </div>
                </Link>
                { currentUser && (
                    <div className="navLinks">
                        currentUser: {JSON.stringify(currentUser['email'])}
                    </div>
                ) }

                <div className="navLinks">
                    <Link to='/test' className="navLink">
                        Test
                    </Link>
                    <Link to='/shop' className="navLink">
                        SHOP
                    </Link>

                    { !currentUser && (
                        <Link to='/auth' className="navLink">
                            SIGN IN
                        </Link>
                    ) }
                    
                    { currentUser && (
                        <span className="navLink" onClick={handleSignout}
                        >
                            SIGN OUT
                        </span>
                    ) }

                    <CartIcon />
                </div>

                { cartOpen && <CartDropdown /> }
               
            </div>
            
            <Outlet />
        </>
    )
}

export default Nav