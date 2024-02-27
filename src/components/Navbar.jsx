import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

function Navbar() {
  const orders = useSelector((state) => state.orders);
  return (
    <div className='bg-blue-700 text-white flex justify-center p-4 h-[9vh]'>
        <ul className='flex justify-center gap-20'>
            <NavLink to="/" className={({isActive}) => isActive ? "text-white border-b-2 border-b-white" : "text-gray-300 border-b-2 border-b-blue-700"}>Home</NavLink>
            <NavLink to="/orders" className={({isActive}) => isActive ? "text-white border-b-2 border-b-white" : "text-gray-300 border-b-2 border-b-blue-700"} >Cart ({orders.length})</NavLink>
        </ul>
    </div>
  )
}

export default Navbar