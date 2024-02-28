import React from 'react'

function Footer() {
  return (
    <div className=' w-auto flex justify-center items-center py-2 border-t-2 border-gray-500 shadow-2xl dark:bg-gray-900 dark:text-gray-200 text-black cursor-pointer h-[6vh]'>
        <p className='transition-all duration-500 hover:text-gray-300'>
        &copy; 2024 MyBurger.com | All rights reserved.
        </p>
    </div>
  )
}

export default Footer