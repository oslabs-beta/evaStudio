 import React from 'react';
import { overview, producers, consumers, topics, zookeeper } from '../routes/reactRoutes';

const NavigationPanel = (props) => {
  return (
    <div className='flex flex-col mt-[50px] w-1/6' id='navigationPanel'>

      <div>
        <div className='px-[30px] py-[10px] bg-gray-800 rounded-md'>
          <button className='secondaryButton' onClick={() => props.navigateFunc(overview)}>Overview</button>
        </div>
        <div className='px-[30px] py-[10px]'>
          <button className='secondaryButton' onClick={() => props.navigateFunc(topics)}>Topics</button>
        </div>
        <div className='px-[30px] py-[10px]'>
          <button className='secondaryButton' onClick={() => props.navigateFunc(zookeeper)}>Zookeeper</button>
        </div>
      </div>

      <div className='absolute bottom-10 left-30'>
        {/* <img src= */}
        <button className='ml-[50px]'>Documentation</button>
      </div>
    </div >
  )
}

export default NavigationPanel;