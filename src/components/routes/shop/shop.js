import { useContext } from 'react'

import { CategoriesContext } from '../../../contexts/categories-context'
import CategoriesPreview from '../../categories/categories-preview'

import './shops.styles.scss'

const Shop = () => {
    const { categoriesMap } = useContext(CategoriesContext);
    
    return (
        <>
            <div className='shop-container'>
                {Object.keys(categoriesMap).map((key) => {
                    const products = categoriesMap[key];
                    return (
                        <CategoriesPreview key={key} title={key} products={products} />
                    )
                })}
            </div>
        </>
    )
}

export default Shop