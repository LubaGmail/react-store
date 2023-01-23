import { useContext } from 'react';

import { CartContext } from '../../contexts/cart-context';

import './product.styles.scss'

const Product = ({ product }) => {
    const { id, name, imageUrl, price } = product;
    const { addItem } = useContext(CartContext)
        
    return (
     
            <div className='product'>
                <img src={imageUrl} alt={name}
                />
                <div className="footer">
                    <span className='name'>{name}</span>
                    <span className='price'>${price}</span>
                </div>
                <button onClick={ () => addItem (product)}
                >
                    Add to cart
                </button>
            </div>

    )
}

export default Product

