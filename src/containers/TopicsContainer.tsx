import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router';
import { Outlet } from 'react-router';

const TopicsContainer = () => {
  const { httpLink, dateNow } = useSelector((state: any) => state.credentials);

  const style = {
    borderStyle: 'none',
  }


  return (
    <div id='topicsContainer' className='flex flex-col justify-center items-center bg-white'>
      <h1 className='text-4xl font-semibold mb-[20px]'>Topic Overview</h1>
      <div className='flex flex-wrap'>
        <iframe src={`http://${httpLink}/d-solo/5nhADrDWk/kafka-metrics?refresh=1m&orgId=1&panelId=152&from=${dateNow - 900000}&to=${dateNow}&var-job=kafka&var-broker=All&var-topic=All&var-online_broker=3&theme=dark`} height="200" className='w-1/2'></iframe>
        <iframe src={`http://${httpLink}/d-solo/5nhADrDWk/kafka-metrics?refresh=1m&orgId=1&panelId=155&from=${dateNow - 900000}&to=${dateNow}&var-job=kafka&var-broker=All&var-topic=All&var-online_broker=3&theme=dark`} height="200" className='w-1/2'></iframe>
        <iframe src={`http://${httpLink}/d-solo/5nhADrDWk/kafka-metrics?refresh=1m&orgId=1&panelId=50&from=${dateNow - 900000}&to=${dateNow}&var-job=kafka&var-broker=All&var-topic=All&var-online_broker=3&theme=dark`} height="200" className='w-1/2'></iframe>
      </div>

      <div className='mt-[40px]'>
        <Outlet /> {/* For react router to render whatever table belongs here: all topics or messages in a topic*/}
      </div>
    </div>
  )
}

export default TopicsContainer;
