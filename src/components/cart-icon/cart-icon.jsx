import { useContext } from 'react'

import { ReactComponent as BagIcon } from '../../assets/bag.svg'
import './cart-icon.styles.scss'

import { CartContext } from '../../contexts/cart-context'

const CartIcon = () => {
    const {cartOpen, setCartOpen} = useContext(CartContext)

    const toggleCartOpen = () => {
        setCartOpen(!cartOpen)
    }

    return (
    
        <div className='cart-icon-container' onClick={toggleCartOpen} >
            <BagIcon className='bag-icon'
            />
            <span className='item-count'>0</span>
        </div>   
      
    )
}

export default CartIcon