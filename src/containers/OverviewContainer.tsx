import React from 'react'
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useState } from 'react';

const OverviewContainer = () => {
  const { httpLink } = useSelector((state: any) => state.credentials);

  const style = {
    borderStyle: 'none',
    backgroundColor: '#f5f5f5',
    overflow: 'auto',
  }

  const [dateNow, setDateNow] = useState(Date.now());
  const [fiveLess, setFiveLess] = React.useState(Date.now() - 300000);

  const refresh = () => {
    setDateNow(dateNow + 5000);
    setFiveLess(fiveLess + 5000);
  }

  setInterval(refresh , 5000);

  return (
    <div id='overviewContainer'>
      <h1>Overview Container</h1>
      <iframe src={`http://${httpLink}/d-solo/-2xxKk67k/kafka-overview?orgId=1&from=${fiveLess}&to=${dateNow}&refresh=5s&panelId=1&theme=light`} width="600" height="300" style={style} ></iframe>
      <iframe src={`http://${httpLink}/d-solo/-2xxKk67k/kafka-overview?orgId=1&from=${fiveLess}&to=${dateNow}&refresh=5s&panelId=2&theme=light`} width="600" height="300" style={style}></iframe>
    </div>
  )
}

export default OverviewContainer;
