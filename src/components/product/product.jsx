import './product.styles.scss'

const Product = ({ product }) => {
    const { id, name, imageUrl, price } = product;
    
    return (
        <>
            <div className='product'>
                <img src={imageUrl} alt={name}
                />
                <div className="footer">
                    <span className='name'>{name}</span>
                    <span className='price'>${price}</span>
                </div>
                <button>
                    Add to cart
                </button>
            </div>
        </>
    )
}

export default Product

