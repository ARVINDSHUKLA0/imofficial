
import Home from './pages/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductDetailPage from './pages/ProductDetailPage';
// import Home from './pages/Home'

function App() { 

  return (
    <> 
     {/* <Home/> */}

     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/product/:productId' element={<ProductDetailPage/>}></Route>
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
