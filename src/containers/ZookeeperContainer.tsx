import React from 'react';
import { useSelector } from 'react-redux';

const ZookeeperContainer = () => {
    const { httpLink, dateNow } = useSelector((state: any) => state.credentials);

    const style = {
      borderStyle: 'none',
    }

  

  return (
    <div id='zookeeperContainer'>
      <h1>Zookeeper Container</h1>
      <div className='flex flex-wrap'>
        <iframe src={`http://${httpLink}/d-solo/5nhADrDWk/kafka-metrics?from=${dateNow - 900000}&to=${dateNow}&orgId=1&var-job=kafka&var-broker=All&var-topic=All&var-online_broker=3&theme=light&panelId=138`} height="300" width="450" className='w-1/2'></iframe>
        <iframe src={`http://${httpLink}/d-solo/5nhADrDWk/kafka-metrics?from=${dateNow - 900000}&to=${dateNow}&orgId=1&var-job=kafka&var-broker=All&var-topic=All&var-online_broker=3&theme=light&panelId=139`} height="300" width="450" className='w-1/2'></iframe>
        <iframe src={`http://${httpLink}/d-solo/5nhADrDWk/kafka-metrics?from=${dateNow - 900000}&to=${dateNow}&orgId=1&var-job=kafka&var-broker=All&var-topic=All&var-online_broker=3&theme=light&panelId=150`} height="300" width="450" className='w-1/2'></iframe>
      </div>
    </div>
  )
}

export default ZookeeperContainer;