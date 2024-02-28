import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { toggleTheme } from '../redux/actions/ThemeActions';
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";


function Navbar() {
  const dispatch = useDispatch();

  const orders = useSelector((state) => state.orders);
  const themeMode = useSelector((state) => state.themeMode);

  console.log(themeMode);

  const handleThemeMode = () => {
    themeMode ? document.documentElement.classList.remove('dark') : document.documentElement.classList.add('dark');
    dispatch(toggleTheme(themeMode)); 
  }

  return (
    <div className=' fixed top-0 left-0 right-0 bg-white border-b-2 border-gray-500 shadow-xl text-black dark:bg-gray-900 dark:text-gray-200 flex justify-around p-4 h-[9vh]'>
    <div></div>
    <ul className='flex justify-center gap-20'>
        <NavLink to="/" className={({isActive}) => isActive ? "border-b-2 border-b-black font-bold dark:border-white" : "text-gray-600 dark:text-gray-200 dark:border-b-gray-700"}>Home</NavLink>
        <NavLink to="/orders" className={({isActive}) => isActive ? "border-b-2 border-b-black font-bold dark:border-white" : "text-gray-600  dark:text-gray-200 dark:border-b-gray-700"}>Cart ({orders.length})</NavLink>
    </ul>
    <button onClick={handleThemeMode} className='text-3xl'>{themeMode ? <CiLight /> : <MdDarkMode />}</button>
</div>

  )
}

export default Navbar