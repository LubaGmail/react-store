import { useContext } from 'react'
import { Link } from 'react-router-dom'

import { CategoriesContext } from '../../../contexts/categories-context';
import Product from '../../product/product'

import './categories-preview.styles.scss';

const CategoriesPreview = () => {
    const { categoriesMap } = useContext(CategoriesContext)
    
    return (
        <>
            {
                Object.keys(categoriesMap).map((title, i) => (
                    <div className='category-preview-container' key={i}>
                        <Link to={`/shop/${title}`}>
                            <h2>{title.toUpperCase()}</h2>
                        </Link>
                        <div className='preview'>
                            {
                                categoriesMap[title].map((p, i) => (
                                    <span key={i}>
                                        {i < 4 && <Product product={p} />}
                                    </span>
                                ))
                            }
                        </div>
                    </div>
                ) )
            }   
        </>
    )
}

export default CategoriesPreview 

