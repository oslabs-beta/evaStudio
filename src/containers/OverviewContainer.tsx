import React from 'react'
import axios from 'axios';
import { useSelector } from 'react-redux';

const OverviewContainer = () => {
  const { httpLink } = useSelector((state: any) => state.credentials);

  return (
    <div id='overviewContainer'>
      <h1>Overview Container</h1>
      <iframe src={`http://${httpLink}/d-solo/-2xxKk67k/kafka-overview?orgId=1&refresh=5s&from=1657052629706&to=1657054429706&panelId=1&theme=light`} width="900" height="400"></iframe>
    </div>
  )
}

export default OverviewContainer;
