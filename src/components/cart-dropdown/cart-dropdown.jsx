import { useContext } from 'react'

import CartItem from '../cart-item/cart-item'
import { CartContext } from '../../contexts/cart-context'

import './cart-dropdown.styles.scss'

const CartDropdown = () => {
    const { cartItems } = useContext(CartContext)

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
                <button>          
                    GO TO CHECKOUT
                </button>
            </div>
        </>

    )
}

export default CartDropdown

