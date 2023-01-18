import { useContext } from 'react'

import { ProductsContext } from '../../../contexts/products-context'
import Product from '../../product/product'

import './shops.styles.scss'

const Shop = () => {
    const { products } = useContext(ProductsContext);
    
    return (
        <div className='products'>
            {products.map((el, i) => (
                <li key={i}>
                    <Product product={el} />
                </li>
            )) } 
        </div>
    )
}

export default Shop