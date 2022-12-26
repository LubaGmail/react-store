import { Routes, Route } from 'react-router-dom';
import { Outlet } from "react-router-dom";

import Home from './components/routes/home/home';

const Toys = () => {
  return (
    <>
      <h2>Toys</h2>
    </>
  )
}

export const Nav = () => {
  return (
    <>
      <h2 style={{ backgroundColor: 'yellow' }}>Nav Bar</h2>
      <Outlet />
    </>
  )
}

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Nav />} >
        <Route path='home' element={<Home />} />
        <Route path='toys' element={<Toys />} />
      </Route>
    </Routes>
  );
}

export default App;
