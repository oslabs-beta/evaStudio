import React from 'react';
import { useNavigate } from 'react-router';
import LogoIcon from '../assets/logo.svg';

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate('/')} className='w-100 p-5 cursor-pointer' id='navBar'>
      <img className='md:w-60 p-2 rounded-md bg-indigo-300' src={LogoIcon} alt="" />
    </div>
  )
}


export default NavBar;