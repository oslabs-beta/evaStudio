import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { dashboard } from '../routes/reactRoutes';

const LoginPanel = () => {
  let navigate = useNavigate();
  const [url, setUrl] = useState('');

  const getUrl = (e) => {
    setUrl(e.target.value);   //  example of user input:  http://34.205.177.109:9090
  }

  const fetchMetrics = async (e) => {
    e.preventDefault();
    const endpoint = '/metrics';
    const data = { urlInput: url }
    await axios.post(endpoint, data)
      .then((res) => {
        console.log(res)
        navigate(dashboard, { replace: false }); // Reroutes on success to the route defined in React Router
      })
      .catch(err => {
        console.log(err);
        // show a modal for improper url
      });
  }

  return (
    <div id='app'>
      <form>
        <label>Type your prometheus URL</label>
        <input type='text' id='portURL' placeholder='Example: http://34.205.177.109:9090' onChange={getUrl} size='50'></input>
        <input type='submit' id='submitURLBtn' onClick={fetchMetrics}></input>
      </form>
    </div>
  )
}


export default LoginPanel;