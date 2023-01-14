import { createContext, useState } from 'react';


export const CartContext = createContext({
    cartOpen: false,
    setCartOpen: () => null,
    cartItems: [],
    addToCart: (product) => null,
})

export const CartProvider = ({ children }) => {
    const [cartOpen, setCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([])

    const addToCart = (product) => {
        const {id, name, imageUrl, price} = product
        
        let item = {
            id: id,
            name: name,
            imageUrl: imageUrl,
            price: price,
            quantity: 1
        }
        let items = cartItems
        
        let itemInPlace = (items.find(el => item.id === el.id)) 
        itemInPlace ? itemInPlace.quantity = itemInPlace.quantity + item.quantity : items.push(item)
 
        setCartItems(items)
    }
    
    const value = { cartOpen, setCartOpen, cartItems, addToCart };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
}
