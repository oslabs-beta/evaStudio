import React from 'react'
import axios from 'axios';
import { useSelector } from 'react-redux';

const OverviewContainer = () => {
  const { httpLink } = useSelector((state: any) => state.credentials);

  return (
    <div id='overviewContainer'>
      <h1>Overview Container</h1>
      <iframe src={`http://${httpLink}/d-solo/-2xxKk67k/kafka-overview?orgId=1&refresh=5s&from=1657052629706&to=1657054429706&panelId=1&theme=light`} width="450" height="300"></iframe>
      <iframe src={`http://${httpLink}/d-solo/-2xxKk67k/kafka-overview?panelId=2&orgId=1&from=1657054412628&to=1657056212628&theme=light`} width="450" height="300"></iframe>
      <iframe src={`http://${httpLink}/d-solo/5nhADrDWk/kafka-metrics?refresh=1m&orgId=1&panelId=647&from=1657053014473&to=1657056614473&var-job=kafka&var-broker=All&var-topic=All&var-online_broker=3&theme=light`} width="450" height="200" ></iframe>
      <iframe src={`http://${httpLink}/d-solo/5nhADrDWk/kafka-metrics?refresh=1m&orgId=1&panelId=233&from=1657053128126&to=1657056728126&var-job=kafka&var-broker=All&var-topic=All&var-online_broker=3&theme=light`} width="450" height="200" ></iframe>
      <iframe src={`http://${httpLink}d-solo/5nhADrDWk/kafka-metrics?refresh=1m&orgId=1&panelId=56&fullscreen&from=1657053767107&to=1657057367108&var-job=kafka&var-broker=All&var-topic=All&var-online_broker=3&theme=light`} width="450" height="200" ></iframe>
    </div>
  )
}

export default OverviewContainer;