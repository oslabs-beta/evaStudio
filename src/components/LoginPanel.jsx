import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';

const LoginPanel = () => {
  const [url, setUrl] = useState('');

  const getUrl = (e) => {
    setUrl(e.target.value);   //  example of user input:  http://34.205.177.109:9090
  }

  const fetchMetrics = async (e) => {
    e.preventDefault();
    const endpoint = '/metrics';
    const data = { urlInput: url }
    await axios.post(endpoint, data)
      .then((res) => console.log(res));
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