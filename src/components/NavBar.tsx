import React from 'react';
import LogoIcon from '../assets/logo.svg';

const NavBar = () => {
  return (
    <div className='w-100 p-2' id='navBar'>
      <img className='md:w-60 p-2 rounded-md bg-indigo-300' src={LogoIcon} alt="" />
    </div>
  )
}


export default NavBar;