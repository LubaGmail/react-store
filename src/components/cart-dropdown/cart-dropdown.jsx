import { useContext } from 'react'
import {Link } from "react-router-dom"

import CartItem from '../cart-item/cart-item'
import { CartContext } from '../../contexts/cart-context'

import './cart-dropdown.styles.scss'

const CartDropdown = () => {
    // cartItems: [] ->  return as an Array
    const { cartItems } = useContext(CartContext)           

    const handleClick = () => {
        // console.log('handleClick in cart-dropdown')
    }

    return (
        <>
            <div className="cart-dropdown">
                {
                    cartItems.map((el) => (
                        <li key={el.id}>
                            <CartItem item={el} />
                        </li>
                    ))
                }
                <Link to='/checkout'>
                    <button onClick={handleClick}>          
                        GO TO CHECKOUT
                    </button>
                </Link>
            </div>
        </>
    )
}

export default CartDropdown

