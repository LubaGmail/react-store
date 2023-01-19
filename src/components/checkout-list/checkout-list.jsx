import { useContext } from "react"

import { CartContext } from '../../contexts/cart-context'
import CheckoutItem from '../checkout-item/checkout-item'

import './checkout-list.styles.scss'

const CheckoutList = () => {
    const { cartItems, cartPriceTotal } = useContext(CartContext)
    
    return (
        <>
            <div className="checkout-container">
                <table>
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Description</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Remove</th>
                        </tr>

                    </thead>    
                    <tbody>
                        { cartItems.map(el => (
                            <tr key={el.id}>
                                <CheckoutItem item={el} />
                            </tr>
                        )) }    
                    </tbody>
                    <tfoot>
                        <tr>
                            <th colSpan={2}>Price Total: </th>
                            <td colSpan={4}>${cartPriceTotal}</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </>
    )
}

export default CheckoutList