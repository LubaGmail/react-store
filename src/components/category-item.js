import './category-item.styles.scss'

const CategoryItem = ({category}) => {
  return (
    <>
        <img src='/images/snowflakes.webp'
            className='backgroundImage'
            alt='snowflake'
        />
        <div className='categoryBody'>
            <h2>{category.title}</h2>
            <p>Shop Now</p>
        </div>
    </>
     
  );
}

export default CategoryItem;
