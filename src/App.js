import { Routes, Route } from 'react-router-dom';

import Nav from './components/navigation/nav'
import Home from './components/routes/home/home';
import SignIn from './components/routes/sign-in/sign-in';
import SignupForm from './components/signup-form/signup-form';

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
        <Route path='sign-in' element={<SignIn />} />
        <Route path='sign-up' element={<SignupForm />} />
      </Route>
    </Routes>
  );
}

export default App;
