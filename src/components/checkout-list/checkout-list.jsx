import { useContext } from "react"

import { CartContext } from '../../contexts/cart-context'
import CheckoutItem from '../checkout-item/checkout-item'

import './checkout-list.styles.scss'

const CheckoutList = () => {
    const { cartItems } = useContext(CartContext)
    
    return (
        <>
            <div className="checkout-container">
                <table>
                    <thead>
                        <th>Product</th>
                        <th>Description</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Remove</th>
                    </thead>    
                    <tbody>
                        { cartItems.map(el => (
                            <tr key={el.id}>
                                <CheckoutItem item={el} />
                            </tr>
                        )) }    
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default CheckoutList