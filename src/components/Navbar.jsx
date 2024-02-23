import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className='bg-blue-800 text-white flex justify-center p-4'>
        <ul className='flex justify-center gap-20'>
            <NavLink to="/" >Home</NavLink>
            <NavLink to="/orders" >Orders</NavLink>
        </ul>
    </div>
  )
}

export default Navbar