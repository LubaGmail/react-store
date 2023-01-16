import { useEffect, createContext, useState } from 'react';

export const CartContext = createContext({
    cartOpen: false,
    setCartOpen: () => null,
    cartItems: [],
    addToCart: (product) => null,
    cartTotal: 0,
    updateQuantity: (product) => null
})

const addItemToCart = (cartItems, product) => {
    let existingCartItem = cartItems.find(el => el.id === product.id)
   
    if (existingCartItem) {
        return cartItems.map((el) => {
            if (el.id === product.id) {
                return {...el, quantity: ++el.quantity }
            } else {
                return el
            }
        })
    } 
    
    return [...cartItems, { ...product, quantity: 1 } ];
}

const updateItemQuantity = (cartItems, product) => {
    let existingCartItem = cartItems.find(el => el.id === product.id)
    
    if (existingCartItem) {
        let updatedCart = cartItems.map((el) => {
            if (el.id === product.id) {
                el.quantity = product.quantity
                return el
            } else {
                return el
            }
        })
        return updatedCart
    } 
}

export const CartProvider = ({ children }) => {
    const [cartOpen, setCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([])
    const [cartTotal, setCartTotal] = useState(0)

    useEffect(() => {
        let tot = cartItems.reduce((accum, el) => {
            return accum += el.quantity
        }, 0)

        setCartTotal(tot);
    }, [cartItems])

    const addToCart = (product) => {
        let updatedCart = addItemToCart(cartItems, product)
        setCartItems(updatedCart)
    }

    const updateQuantity = (product) => {
        const updatedCart = updateItemQuantity(cartItems, product)
        if (updatedCart) {
            setCartItems(updatedCart)
        }
    }
    
    const value = { cartOpen, setCartOpen, cartItems, addToCart, cartTotal, updateQuantity };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
}
