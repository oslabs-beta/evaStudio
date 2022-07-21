import React, { useState } from 'react'
import { useSelector } from 'react-redux';



const OverviewContainer = () => {
  const { httpLink, dateNow } = useSelector((state: any) => state.credentials);

  return (
    <div id='overviewContainer' className='flex flex-col bg-gray-700 p-5 bg-opacity-50 justify-center items-center rounded-xl'>
      <h1 className='text-4xl font-semibold mb-[20px]'>Cluster Health ❤️</h1>

      <div className='grid grid-rows-3 grid-cols-4 gap-4 min-w-[80vw] min-h-[75vh] mt-[30px]'>

        <iframe
          src={`http://${httpLink}/d-solo/5nhADrDWk/kafka-metrics?orgId=1&refresh=10s&from=${dateNow - 900000}&to=${dateNow}&theme=dark&panelId=647`}
          frameBorder="1"
          className='w-full h-full rounded-lg'
        >
        </iframe>

        <iframe
          src={`http://${httpLink}/d-solo/5nhADrDWk/kafka-metrics?orgId=1&refresh=10s&from=${dateNow - 900000}&to=${dateNow}&theme=dark&panelId=233`}
          frameBorder="1"
          className='w-full h-full rounded-lg'
        >
        </iframe>

        <iframe
          src={`http://${httpLink}/d-solo/5nhADrDWk/kafka-metrics?orgId=1&refresh=10s&from=${dateNow - 900000}&to=${dateNow}&theme=dark&panelId=625`}
          frameBorder="1"
          className='w-full h-full rounded-lg'
        >
        </iframe>

        <iframe
          src={`http://${httpLink}/d-solo/5nhADrDWk/kafka-metrics?orgId=1&refresh=10s&from=${dateNow - 900000}&to=${dateNow}&theme=dark&panelId=40`}
          frameBorder="1"
          className='w-full h-full rounded-lg'
        >
        </iframe>

        <iframe
        src={`http://${httpLink}/d-solo/5nhADrDWk/kafka-metrics?orgId=1&refresh=10s&from=${dateNow - 900000}&to=${dateNow}&theme=dark&panelId=467`}
        frameBorder="1"
        className='col-span-2 row-span-2 h-full w-full rounded-lg'
        >
        </iframe>

        {/* <iframe
          src={`http://${httpLink}/d-solo/5nhADrDWk/kafka-metrics?orgId=1&from=${dateNow - 900000}&to=${dateNow}&var-job=evaStudio&var-broker=All&var-topic=All&var-online_broker=3&var-Filters=instance%7C%3D%7Cjmx-kafka2%3A5566&theme=dark&panelId=681`}
          frameBorder="1"
          className='col-span-2 row-span-2 h-full w-full rounded-lg'
        >
        </iframe> */}

        <iframe
          src={`http://${httpLink}/d-solo/5nhADrDWk/kafka-metrics?orgId=1&from=${dateNow - 900000}&to=${dateNow}&var-job=evaStudio&var-broker=All&var-topic=All&var-online_broker=3&var-Filters=instance%7C%3D%7Cjmx-kafka2%3A5566&refresh=10s&theme=dark&panelId=688`}
          frameBorder="1"
          className='w-full col-span-2 h-full rounded-lg'
        >
        </iframe>

        <iframe
          src={`http://${httpLink}/d-solo/5nhADrDWk/kafka-metrics?orgId=1&refresh=10s&from=${dateNow - 900000}&to=${dateNow}&theme=dark&panelId=192`}
          frameBorder="1"
          className='w-full col-span-2 h-full rounded-lg'>
        </iframe>

        {/* <iframe
          src={`http://${httpLink}/d-solo/5nhADrDWk/kafka-metrics?orgId=1&from=${dateNow - 900000}&to=${dateNow}&var-job=evaStudio&var-broker=All&var-topic=All&var-online_broker=3&var-Filters=instance%7C%3D%7Cjmx-kafka2%3A5566&refresh=10s&theme=dark&panelId=192`}
          frameBorder="1"
          className='w-full col-span-2 h-full rounded-lg'
        >
        </iframe> */}

      </div>
    </div >
  )
}


export default OverviewContainer;