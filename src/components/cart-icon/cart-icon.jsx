import { ReactComponent as BagIcon } from '../../assets/bag.svg'
import './cart-icon.styles.scss'

const CartIcon = () => {

    return (
    
        <div className='cart-icon-container'>
            <BagIcon className='bag-icon'
            />
            <span className='item-count'>0</span>
        </div>   
      
    )
}

export default CartIcon