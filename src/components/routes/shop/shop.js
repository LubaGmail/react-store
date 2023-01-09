import { useContext } from 'react'

import { ProductsContext } from '../../../contexts/products-context'

const Shop = () => {
    const { products } = useContext(ProductsContext);
    
    return (
        <>
            <h2>Shop</h2>
            {
                products.map((el, i) => (
                    <li key={i}>
                        {el.name}
                    </li>
                ))
        
            }
        </>
    )
}

export default Shop