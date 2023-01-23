import { useContext } from 'react'

import { CategoriesContext } from '../../../contexts/categories-context'
import Product from '../../product/product'

import './shops.styles.scss'

const Shop = () => {
    const { categoriesMap } = useContext(CategoriesContext);
    
    return (
        <>
            {
                Object.keys(categoriesMap).map((title, i) => (
                    <>
                        <h2>{title}</h2>
                        <div className='products'>
                            {
                                categoriesMap[title].map((p, i) => (
                                    <Product key={i}  product={p} />
                                ))
                            }
                        </div>
                    </>
                
                ) )
            }

        </>
    )
}

export default Shop