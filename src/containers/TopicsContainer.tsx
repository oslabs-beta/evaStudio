import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router';
import { Outlet } from 'react-router';
import CSVUploader from '../components/CSVUploader';

const TopicsContainer = () => {
  const { httpLink, dateNow } = useSelector((state: any) => state.credentials);

  return (
    <div id='topicsContainer' className='flex flex-col bg-gray-700 pt-[20px] px-[35px] bg-opacity-50 justify-center items-center rounded-xl'>
      <h1 className='text-4xl font-semibold mb-[20px]'>Message Logs</h1>

      <div className='flex justify-center min-w-[80vw] min-h-[75vh] mt-[30px]'>

        <div
          id='addMessagePanelWrapper'
          className='mr-[40px] mt-[10px]'
        >

          <CSVUploader />
        </div>

        {/* For react router to render whatever table belongs here: all topics or messages in a topic*/}
        <Outlet />

      </div>
    </div>
  )
}

export default TopicsContainer;
