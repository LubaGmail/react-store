import { useContext, useRef } from "react"

import { CartContext } from "../../../contexts/cart-context"

const CheckoutItem = ({item}) => {
    const { id, name, imageUrl, price, quantity } = item
    const quantityRef = useRef()
    const { updateQuantity } = useContext(CartContext)

    const subtractQuantity = () => {
        let x = parseInt( (quantityRef.current.innerText).toString() )
        if (isNaN(x) || x === 0) {
            return
        } else {
            x -= 1
            item.quantity = x
            updateQuantity (item)
            quantityRef.current.innerText = x.toString()
        }
        
    }
    const addQuantity = () => {
        let x = parseInt( (quantityRef.current.innerText).toString() )
        if ( isNaN(x) ) {
            return
        } else {
            x += 1
            item.quantity = x
            updateQuantity (item)
            quantityRef.current.innerText = x.toString()
        }
    }

    return (
        <>
            <td>image</td>
            <td>{name}</td>
            <td >
                <span onClick={subtractQuantity}> - </span>
                <span ref={quantityRef}>{quantity}</span>
                <span onClick={addQuantity}> + </span>
            </td>
            <td>{price}</td>
            <td>X</td>  
        </>
    )
}

export default CheckoutItem