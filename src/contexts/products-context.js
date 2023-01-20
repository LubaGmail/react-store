import { createContext, useState, useEffect } from 'react';

import PRODUCTS from '../data/DUMMY_PRODUCTS.json'
import SHOP_DATA from '../data/shop-data'
import { addCollection } from '../utils/firebase/firebase';
import { getCategories } from '../utils/firebase/firebase';

export const ProductsContext = createContext({
    products: [],
});

export const ProductsProvider = ({ children }) => {
    const [products] = useState(PRODUCTS);
    const value = { products };         // put an array inside value which must be an object

    useEffect(() => {
        const getData = async() => {
            const categoryMap = await getCategories()
            console.log('categoryMap', categoryMap)
        }
        getData()
    }, []);
    
    return (
        <ProductsContext.Provider value={value}>
            {children}
        </ProductsContext.Provider>
    );
};