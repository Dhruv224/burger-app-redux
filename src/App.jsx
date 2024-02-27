import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Orders from './components/Orders'
import UpdateOrder from './components/UpdateOrder'
import Error from './components/Error'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Navbar/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/orders' element={<Orders/>}/>
        <Route path='/orders/:orderId' element={<UpdateOrder/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>

      <Footer/>
    </>
  )
}

export default App
