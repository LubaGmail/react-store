import { useContext } from 'react'
import { Outlet, Link } from "react-router-dom"

import CartItem from '../cart-item/cart-item'
import { CartContext } from '../../contexts/cart-context'

import './cart-dropdown.styles.scss'

const CartDropdown = () => {
    const { cartItems } = useContext(CartContext)   // cartItems: [] ->  return as an Array

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
                    <button>          
                        GO TO CHECKOUT
                    </button>
                </Link>
            </div>
        </>

    )
}

export default CartDropdown

