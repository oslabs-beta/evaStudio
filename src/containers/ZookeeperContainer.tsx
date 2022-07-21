import React from 'react';
import { useSelector } from 'react-redux';

const ZookeeperContainer = () => {
  const { httpLink, dateNow } = useSelector((state: any) => state.credentials);

  const style = {
    borderStyle: 'none',
  }



  return (
    <div id='zookeeperContainer' className='flex flex-col justify-center items-center min-w-[90vw]'>
      <h1 className='text-4xl font-semibold mb-[20px]'>Zookeeper Container</h1>
      <div className='flex flex-wrap'>
        <iframe
          src={`http://${httpLink}/d-solo/5nhADrDWk/kafka-metrics?orgId=1&refresh=1m&from=${dateNow - 900000}&to=${dateNow}&theme=dark&panelId=138`}
          frameBorder="`"
          className='w-1/2'>
        </iframe>

        <iframe
          src={`http://${httpLink}/d-solo/5nhADrDWk/kafka-metrics?orgId=1&from=${dateNow - 900000}&to=${dateNow}&var-job=evaStudio&var-broker=All&var-topic=All&var-online_broker=3&var-Filters=instance%7C%3D%7Cjmx-kafka2%3A5566&refresh=10s&theme=dark&panelId=139`}
          frameBorder="1"
          className='w-1/2'>
        </iframe>


        <iframe src={`http://${httpLink}/d-solo/5nhADrDWk/kafka-metrics?from=${dateNow - 900000}&to=${dateNow}&orgId=1&var-job=kafka&var-broker=All&var-topic=All&var-online_broker=3&theme=dark&panelId=150`} height="300" width="450" className='w-1/2'></iframe>
      </div>
    </div>
  )
}

export default ZookeeperContainer;