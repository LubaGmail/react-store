import { useContext } from "react"

import { CartContext } from "../../../contexts/cart-context"
import CheckoutItem from "./checkout-item"

const Checkout = () => {
    const { cartItems, setCartItems } = useContext(CartContext)
    
    return (
        <>
            <div>
                <table>
                    <thead>
                        <th>Product</th>
                        <th>Description</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Remove</th>
                    </thead>    
                    <tbody>
                        {
                            cartItems.map(el => (
                                <tr key={el.id}>
                                    <CheckoutItem item={el} />
                                </tr>
                            ))
                        }    
                    </tbody>
                </table>
            </div>

        </>
    )
}

export default Checkout