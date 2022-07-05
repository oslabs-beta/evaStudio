import React from 'react'
import axios from 'axios';
import { useSelector } from 'react-redux';

const OverviewContainer = () => {
  const { httpLink } = useSelector((state: any) => state.credentials);

  const url = '/metrics';
  const data = { ipPort: httpLink };

  const getHealthMetrics = async () => {
    await axios.post(url, data)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }

  return (
    <div id='overviewContainer'>
      <h1>Overview Container</h1>
    </div>
  )
}

export default OverviewContainer;
