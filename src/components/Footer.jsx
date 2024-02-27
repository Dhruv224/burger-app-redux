import React from 'react'

function Footer() {
  return (
    <div className=' w-auto flex justify-center items-center py-2 bg-blue-700 text-white cursor-pointer h-[6vh]'>
        <p className='transition-all duration-500 hover:text-gray-300'>
        &copy; 2024 MyBurger.com | All rights reserved.
        </p>
    </div>
  )
}

export default Footer