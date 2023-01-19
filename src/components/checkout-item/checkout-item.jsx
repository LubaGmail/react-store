import { useContext, useRef } from "react"

import { CartContext } from "../../contexts/cart-context"

import './checkout-item.styles.scss'

const CheckoutItem = ({item}) => {
    const { id, name, imageUrl, price, quantity } = item
    const quantityRef = useRef()
     const { updateItemQuantity, removeItem } = useContext(CartContext)
 
    const subtractQuantity = () => {
        let x = parseInt( (quantityRef.current.innerText).toString() )
        if  (!(x < 2) ) {
            item.quantity = --x
            updateItemQuantity (item)
            quantityRef.current.innerText = x.toString()
        }
    }
    
    const addQuantity = () => {
        let x = parseInt( (quantityRef.current.innerText).toString() )
        item.quantity = ++x
        updateItemQuantity (item)
        quantityRef.current.innerText = x.toString()
    }

    const handleRemoveItem = () => {
        removeItem(item)
    }

    return (
        <>
            <td className="image-container">
                <img src={imageUrl} alt={name} />
            </td>
            <td>{name}</td>
            <td >
                <span onClick={subtractQuantity} className="clickable">  &#10094; </span>
                <span ref={quantityRef}>{quantity}</span>
                <span onClick={addQuantity} className="clickable">  &#10095; </span>
            </td>
            <td>${price}</td>
            <td onClick={handleRemoveItem} className="clickable">
                <span>&#10005;</span>
            </td>  
        </>
    )
}

export default CheckoutItem