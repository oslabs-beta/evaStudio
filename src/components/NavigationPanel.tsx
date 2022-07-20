import React from 'react';
import { overview, topics, zookeeper } from '../routes/reactRoutes';

const NavigationPanel = (props) => {
  return (
    <div className='flex flex-col items-center w-52 mt-[50px]' id='navigationPanel'>
      <div className=''>
        <button className='secondaryButton' onClick={() => props.navigateFunc(overview)}>Overview</button>
      </div>
      <div className=''>
        <button className='secondaryButton' onClick={() => props.navigateFunc(topics)}>Topics</button>
      </div>
      <div className=''>
        <button className='secondaryButton' onClick={() => props.navigateFunc(zookeeper)}>Zookeeper</button>
      </div>
    </div >
  )
}

export default NavigationPanel;