import React from 'react';
import { useSelector } from 'react-redux';

const ZookeeperContainer = () => {
  const { httpLink, dateNow } = useSelector((state: any) => state.credentials);

  const style = {
    borderStyle: 'none',
  }



  return (
    <div id='zookeeperContainer' className='flex flex-col bg-gray-700 p-5 bg-opacity-50 justify-center items-center rounded-xl'>
      <h1 className='text-4xl font-semibold mb-[20px]'>System Load</h1>

      <div className='grid grid-rows-3 grid-cols-2 gap-4 min-w-[80vw] min-h-[75vh] mt-[30px]'>
        <iframe
          src={`http://${httpLink}/d-solo/5nhADrDWk/kafka-metrics?orgId=1&refresh=5s&from=${dateNow - 900000}&to=${dateNow}&theme=dark&panelId=138`}
          frameBorder="`"
          className='col-span-1 row-span-1 h-full w-full rounded-lg'
        >
        </iframe>

        <iframe
          src={`http://${httpLink}/d-solo/5nhADrDWk/kafka-metrics?orgId=1&refresh=5s&from=${dateNow - 900000}&to=${dateNow}&theme=dark&panelId=139`}
          frameBorder="1"
          className='col-span-1 row-span-1 h-full w-full rounded-lg'
        ></iframe>


        {/* <iframe
          src={`http://${httpLink}/d-solo/5nhADrDWk/kafka-metrics?orgId=1&from=${dateNow - 900000}&to=${dateNow}&var-job=evaStudio&var-broker=All&var-topic=All&var-online_broker=3&var-Filters=instance%7C%3D%7Cjmx-kafka2%3A5566&refresh=10s&theme=dark&panelId=139`}
          frameBorder="1"
          className='col-span-1 row-span-1 h-full w-full rounded-lg'
        >
        </iframe> */}


        {/* <iframe
          src={`http://54.175.34.47:3000/d-solo/-2xxKk67k/kafka-overview?orgId=1&from=1658363453400&to=1658365253400&theme=dark&panelId=2`}
          frameBorder="1"
          className='col-span-2 row-span-1 h-full w-full rounded-lg'
        >
        </iframe> */}

        <iframe src={`http://54.175.34.47:3000/d-solo/5nhADrDWk/kafka-metrics?orgId=1&refresh=10s&from=1658415790596&to=1658419390596&theme=dark&panelId=163`} frameBorder="0"
          className='col-span-2 row-span-1 h-full w-full rounded-lg'
        ></iframe>


        {/* <iframe
          src={`http://54.175.34.47:3000/d-solo/-2xxKk67k/kafka-overview?orgId=1&from=1658363215389&to=1658365015389&theme=dark&panelId=1`}
          frameBorder="1"
          className='col-span-2 row-span-1 h-full w-full rounded-lg'
        >
        </iframe> */}

        <iframe src={`http://54.175.34.47:3000/d-solo/5nhADrDWk/kafka-metrics?orgId=1&refresh=10s&from=1658415819271&to=1658419419271&theme=dark&panelId=81`} frameBorder="0"
          className='col-span-2 row-span-1 h-full w-full rounded-lg'

        ></iframe>

      </div>

    </div>
  )
}

export default ZookeeperContainer;