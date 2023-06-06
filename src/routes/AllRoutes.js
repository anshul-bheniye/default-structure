import {Routes, Route} from 'react-router-dom';
import {Home, Pnf} from '../pages';
import { CartItems } from '../components';
 

export const AllRoutes = () => {
  return (
    <main>
      <Routes>
          <Route path='' element={<Home title="Home" />}></Route>
          <Route path='cart' element={<CartItems title="Cart" />}></Route>
          <Route path='*' element={<Pnf title="404 woof" />}></Route>
      </Routes>
    </main>
    )
}
