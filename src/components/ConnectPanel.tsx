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

  const getUrl = (e) => {
    setUrl(e.target.value);   //  example of user input:  http://34.205.177.109:9090
    dispatch(addHttpLink(url));
  }

  const fetchMetrics = (e) => {
    e.preventDefault();
    navigate(dashboard); // uncomment to see what happens when you click submit

    // const endpoint = '/metrics';
    // const data = { urlInput: url }
    // await axios.post(endpoint, data)
    //   .then((res) => {
    //     console.log(res)
    //     navigate(dashboard, { replace: false }); // Reroutes on success to the route defined in React Router, won't replace browser history
    //   })
    //   .catch(err => {
    //     console.log(err);
    //     // show a modal for improper url
    //   });
  }

  return (
    <div id='connectPannel'>
      <div id='gettingStartedWrapper'>
        <form>
          <h3>Admin Manager URL</h3>
          <input className='inputField' type='text' id='portURL' placeholder='Example: 34.205.177.109:9090' onChange={(e) => getUrl(e)} size={50}></input>
          <div id='spacingButton'>
            <input className='primaryButton' type='submit' id='submitURLBtn' onClick={fetchMetrics}></input>
          </div>
        </form>
      </div>
      <img id='brandImg' src='https://static.vecteezy.com/system/resources/previews/004/745/458/non_2x/modern-flat-design-3d-isometric-concept-of-big-data-analysis-for-banner-and-website-isometric-landing-page-template-digital-information-chart-and-statistic-financial-budget-illustration-free-vector.jpg' />
    </div>
  )
}


export default LoginPanel;