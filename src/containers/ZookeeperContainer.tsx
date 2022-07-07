import React from 'react';
import { useSelector } from 'react-redux';

const ZookeeperContainer = () => {
    const { httpLink, dateNow } = useSelector((state: any) => state.credentials);
  

  return (
    <div id='zookeeperContainer'>
      <h1>Zookeeper Container</h1>

      <iframe src={`http:// ${httpLink}/d-solo/5nhADrDWk/kafka-metrics?from=${dateNow - 900000}&to=${dateNow}&orgId=1&var-job=kafka&var-broker=All&var-topic=All&var-online_broker=3&theme=light&panelId=138`} width="450" height="200" ></iframe>
      <iframe src={`http:// ${httpLink}/d-solo/5nhADrDWk/kafka-metrics?from=${dateNow - 900000}&to=${dateNow}&orgId=1&var-job=kafka&var-broker=All&var-topic=All&var-online_broker=3&theme=light&panelId=139`} width="450" height="200" ></iframe>
      <iframe src={`http:// ${httpLink}/d-solo/5nhADrDWk/kafka-metrics?from=${dateNow - 900000}&to=${dateNow}&orgId=1&var-job=kafka&var-broker=All&var-topic=All&var-online_broker=3&theme=light&panelId=150`} width="450" height="200" ></iframe>

    </div>
  )
}

export default ZookeeperContainer;