import Navbar from './components/Navbar'
import {Routes,Route, Router} from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'

const App = () => {
  return (
  <div className='overflow-hidden'>
      <div className='bg-slate-900'>
        <Navbar/>
      </div>

      <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/cart' element={<Cart/>}/>
      </Routes>
  </div>
  )
};

export default App;
