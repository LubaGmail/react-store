import { DUMMY_CATEGORIES } from '../data/DUMMY_CATEGORIES'
import './categories-list.styles.scss'
import CategoryItem from './category-item';

const CategoryList = () => {
  return (
    <>
      <div className='categories'>
        {
          DUMMY_CATEGORIES.map( (el, i) => (
            <CategoryItem category={el} key={i} />
          ))
        }
      </div>

    </>
     
  );
}

export default CategoryList;
