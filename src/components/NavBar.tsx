import React from 'react';
import { useNavigate } from 'react-router';
import LogoIcon from '../assets/logo.svg';
import GithubLogo from '../assets/github.svg';

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <div  className='w-100 p-5 flex justify-between items-center' id='navBar'>
      <img onClick={() => navigate('/')} className='md:w-60 p-2 cursor-pointer rounded-md bg-yellow-300' src={LogoIcon} alt="" />
      <a className='flex justify-center bg-indigo-300 gap-2 items-center  p-2 px-3 rounded-3xl' href="https://github.com/oslabs-beta/evaStudio" target='_blank'>
        <img src={GithubLogo} className='h-[40px] w-[40px]' alt="Github Logo" />
        <span className='text-gray-900 text-lg font-semibold'>Github</span>
      </a>
    </div>
  )
}


export default NavBar;