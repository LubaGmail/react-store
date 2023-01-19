import { useEffect, useState,  createContext, } from 'react';

export const CartContext = createContext({
    cartOpen: false,
    setCartOpen: () => null,
    cartItems: [],
    addToCart: (product) => null,
    cartTotal: 0,
    cartPriceTotal: 0,
    updateQuantity: (product) => null,
    deleteItem: (product) => null,
})

const addItemToCart = (cartItems, product) => {
    let existingCartItem = cartItems.find(el => el.id === product.id)
    if (existingCartItem) {
        return cartItems.map((el) => 
            el.id === product.id
            ? {...el, quantity: ++el.quantity }
            : el
        )
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

const updateItems = (cartItems, product) => {
    return cartItems.filter(el => el.id !== product.id)
}

export const CartProvider = ({ children }) => {
    const [cartOpen, setCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([])
    const [cartTotal, setCartTotal] = useState(0)
    const [cartPriceTotal, setCartPriceTotal] = useState(0)

    useEffect(() => {
        let tot = cartItems.reduce((accum, el) => {
            return accum += el.quantity
        }, 0)

        setCartTotal(tot);
    }, [cartItems])

    useEffect(() => {
        let tot = cartItems.reduce((accum, el) => {
            return accum += (el.quantity * el.price)
        }, 0)

        setCartPriceTotal(tot);
    }, [cartItems])

    const addToCart = (product) => {
        setCartItems(addItemToCart(cartItems, product) )
    }

    const updateQuantity = (product) => {
        setCartItems(updateItemQuantity(cartItems, product))
    }

    const deleteItem = (product) => {
        setCartItems( updateItems(cartItems, product) )
    }
    
    const value = { cartOpen, setCartOpen, cartItems, addToCart, cartTotal, cartPriceTotal, updateQuantity, deleteItem };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
}
