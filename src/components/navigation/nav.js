import { Outlet, Link } from "react-router-dom"
import { useState, useContext } from 'react';

import './nav.styles.scss'
import { ReactComponent as CrownLogo } from '../../assets/crown.svg'
import { UserContext } from '../../contexts/user-context';
import { CartContext } from '../../contexts/cart-context'
import { signOutUser } from "../../utils/firebase/firebase";
import CartIcon from "../cart-icon/cart-icon";
import CartDropdown from "../cart-dropdown/cart-dropdown";

const Nav = () => {
    const { currentUser, setCurrentUser } = useContext(UserContext);
    const { cartVisible, setCartVisible } = useContext(CartContext);
    
    const handleSignout = async () => {
        await signOutUser();
        setCurrentUser(null)
    }

    const handleCartVisibility = () => {
        setCartVisible(!cartVisible)
    }

    return (
        <>
            <div className="nav" >
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
                    <Link to='/shop' className="navLink">
                        SHOP
                    </Link>

                    {
                        !currentUser && (
                            <Link to='/auth' className="navLink">
                                SIGN IN
                            </Link>
                        )
                    }
                    {
                        currentUser && (
                            <span className="navLink" onClick={handleSignout}
                            >
                                SIGN OUT
                            </span>
                        )
                    }

                    <span onClick={handleCartVisibility}><CartIcon /></span>
                    
                </div>

                {
                    cartVisible && <CartDropdown />
                }
               
            </div>
            
            <Outlet />
        </>
    )
}

export default Nav