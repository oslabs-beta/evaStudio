import React, { useState } from 'react';
import axios from 'axios';
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
    <div id='connectPannel'>
      <div className='bg-gray-700 px-5 py-40' id='gettingStartedWrapper'>
        <form>
          <h3>Admin Manager URL</h3>
          <input className='inputField' type='text' id='portURL' placeholder='Example: 34.205.177.109:9090' value={url} onChange={(e) => setUrl(e.target.value)} size={50}></input>
          <div id='spacingButton'>
            <input className='primaryButton' type='submit' id='submitURLBtn' onClick={handleClick}></input>
          </div>
        </form>
      </div>
      {/* <img id='brandImg' src='https://static.vecteezy.com/system/resources/previews/004/745/458/non_2x/modern-flat-design-3d-isometric-concept-of-big-data-analysis-for-banner-and-website-isometric-landing-page-template-digital-information-chart-and-statistic-financial-budget-illustration-free-vector.jpg' /> */}
    </div>
  )
}


export default LoginPanel;