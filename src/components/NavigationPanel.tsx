import React from 'react';
import { overview, topics, zookeeper } from '../routes/reactRoutes';
import notebookLogo from '../assets/notebook.svg';
const NavigationPanel = (props) => {


  return (
    <div className='flex flex-col mt-[50px] w-[12vw]' id='navigationPanel'>

      <div>
        <div className='px-[30px] py-[10px] active:bg-gray-800 rounded-md'>
          <button className='secondaryButton' onClick={() => props.navigateFunc(overview)}>Cluster Health</button>
        </div>
        <div className='px-[30px] py-[10px] active:bg-gray-800 rounded-md'>
          <button className='secondaryButton' onClick={() => props.navigateFunc(topics)}>Message Logs</button>
        </div>
        <div className='px-[30px] py-[10px] active:bg-gray-800 rounded-md'>
          <button className='secondaryButton' onClick={() => props.navigateFunc(zookeeper)}>System Load</button>
        </div>
      </div>

      <div className='absolute p-3 bg-slate-500 bg-opacity-20 rounded-lg flex flex-col items-center ml-[50px] justify-center bottom-10 left-0'>
        <img className='w-[100px] h-[100px]' src={notebookLogo} alt='Documentation Logo' />
        <a href='https://github.com/oslabs-beta/evaStudio' target='_blank' className='bg-emerald-500 bg-opacity-80 rounded-md p-3'>Documentation</a>
      </div>
    </div >
  )
}

export default NavigationPanel;