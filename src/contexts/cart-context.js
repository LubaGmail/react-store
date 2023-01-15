import { createContext, useState } from 'react';

export const CartContext = createContext({
    cartOpen: false,
    setCartOpen: () => null,
    cartItems: [],
    addToCart: (product) => null,
})

const updateCart = (cartItems, product) => {
    let existingCartItem = cartItems.find(el => el.id === product.id)
   
    if (existingCartItem) {
        return cartItems.map((el) => {
            if (el.id === product.id) {
                return {...el, quantity: el.quantity+1 }
            } else {
                return el
            }
        })
    } 
    return [...cartItems, { ...product, quantity: 1 }];
}

export const CartProvider = ({ children }) => {
    const [cartOpen, setCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([])

    const addToCart = (product) => {
        let updatedCart = updateCart(cartItems, product)
        setCartItems(updatedCart)
    }
    
    const value = { cartOpen, setCartOpen, cartItems, addToCart };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
}
