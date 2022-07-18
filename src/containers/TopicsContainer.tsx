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
    <div id='topicsContainer'>
      <h1 className='text-4xl font-bold mb-[20px]'>Topic Overview</h1>
      <div className='flex flex-wrap'>
        <iframe src={`http://${httpLink}/d-solo/5nhADrDWk/kafka-metrics?refresh=1m&orgId=1&panelId=152&from=${dateNow - 900000}&to=${dateNow}&var-job=kafka&var-broker=All&var-topic=All&var-online_broker=3&theme=light`} width="450" height="200" style={style}></iframe>
        <iframe src={`http://${httpLink}/d-solo/5nhADrDWk/kafka-metrics?refresh=1m&orgId=1&panelId=155&from=${dateNow - 900000}&to=${dateNow}&var-job=kafka&var-broker=All&var-topic=All&var-online_broker=3&theme=light`} width="450" height="200" style={style} ></iframe>
        <iframe src={`http://${httpLink}/d-solo/5nhADrDWk/kafka-metrics?refresh=1m&orgId=1&panelId=50&from=${dateNow - 900000}&to=${dateNow}&var-job=kafka&var-broker=All&var-topic=All&var-online_broker=3&theme=light`} width="450" height="200" style={style}></iframe>
      </div>

      <div className='mt-[40px]'>
        <h2 className='text-3xl font-semibold mb-[20px]'>All Topics</h2>
        <Outlet /> {/* For react router to render whatever table belongs here: all topics or messages in a topic*/}
      </div>
    </div>
  )
}

export default TopicsContainer;
