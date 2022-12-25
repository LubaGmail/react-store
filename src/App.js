import { DUMMY_CATEGORIES } from './data/DUMMY_CATEGORIES'
import './categories.styles.scss'
// categories.styles.scss

const App = () => {
  return (
    <>
      <h2>App</h2>
      <hr />

      <div className='categories'>
        {
          DUMMY_CATEGORIES.map( (el, i) => (
            <div  key={i} className='category'>
              <img src='/images/snowflakes2.jpg' className='backgroundImage' alt='goat' />
              <div className='categoryBody'>
                <h3>{el.title}</h3>
                <p>Shop Now</p>
              </div>
            </div>
          ))
        }
      </div>

    </>
     
  );
}

export default App;
