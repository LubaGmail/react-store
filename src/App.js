import { Routes, Route } from 'react-router-dom';

import Nav from './components/navigation/nav'
import Home from './components/routes/home/home';

export const Toys = () => {
  return (
    <>
      <h2>Toys</h2>
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
