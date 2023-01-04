import { Routes, Route } from 'react-router-dom';

import Nav from './components/navigation/nav'
import Home from './components/routes/home/home';
import Auth from './components/routes/auth/auth'

export const Shop = () => {
  return (
    <>
      <h2>Shop</h2>
    </>
  )
}

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Nav />} >
        <Route path='home' element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='auth' element={<Auth />} />
      </Route>
    </Routes>
  );
}

export default App;
