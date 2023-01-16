import { useContext } from 'react'

import { ReactComponent as BagIcon } from '../../assets/bag.svg'
import { CartContext } from '../../contexts/cart-context'

import './cart-icon.styles.scss'

const CartIcon = () => {
    const { cartOpen, setCartOpen, cartTotal } = useContext(CartContext)

    const toggleCartOpen = () => {
        setCartOpen(!cartOpen)
    }

    return (
        <div className='cart-icon-container' onClick={toggleCartOpen} >
            <BagIcon className='bag-icon' />
            <span className='item-count'>{cartTotal}</span>
        </div>   
      
    )
}

export default CartIcon