import React, { useState } from 'react';
import heroImg from '../assets/hero.svg';
import { useNavigate } from "react-router-dom";
import { dashboard } from '../routes/reactRoutes';
import { addHttpLink } from '../actions/credentials';
import { useDispatch } from 'react-redux';

const LoginPanel = (): JSX.Element => {
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const [url, setUrl] = useState('');

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(addHttpLink(url.trim()));
    navigate(dashboard);
  }

  return (
    <div className='text-white flex flex-col md:flex-row gap-4 items-center md:justify-around' id='connectPannel'>
      <div className='bg-slate-700 rounded-lg mx-auto px-10 py-16 max-w-xl' id='gettingStartedWrapper'>
        <form className='grid grid-cols-1 gap-8'>
          <h3 className='text-4xl font-bold'>Admin Manager URL</h3>
          <input className='rounded-lg h-[40px] pl-[10px] pr-[10px] text-black' type='text' id='portURL' placeholder='Example: 34.205.177.109:9090' value={url} onChange={(e) => setUrl(e.target.value)} size={50}></input>
          <div id='spacingButton'>
            <button className='bg-gradient-to-r from-pink-600 to-orange-600 py-3 px-6 text-lg rounded-md w-48 flex items-center justify-center gap-2' onClick={handleClick}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
              </svg>
              <span>Submit</span>
            </button>
          </div>
        </form>
      </div>
      <img className='md:w-3/5' id='brandImg' src={heroImg} />
    </div>
  )
}


export default LoginPanel;