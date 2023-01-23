import './categories-preview.styles.scss';
import Product from '../product/product'

const CategoriesPreview = ({ title, products }) => {
    console.log(title,products)

    return (
        <div className='category-preview-container'>
            <h2>
                <span className='title'>{title.toUpperCase()}</span>
            </h2>
            <div className='preview'>
                { products.map((el, i) => (
                        <>
                            { i < 4 &&
                                < Product product = { el } key = { el.id } />
                            }
                        </>
                   ))
                }
            </div>
        </div>

    )
}

export default CategoriesPreview 

