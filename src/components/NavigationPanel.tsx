import React from 'react';
import { overview, producers, consumers, topics, zookeeper } from '../routes/reactRoutes';

const NavigationPanel = (props) => {
  return (
    <div className='flex flex-col justify-items-content align-items-content' id='navigationPanel'>
      <div className='buttonSpacer'>
        <button className='secondaryButton' onClick={() => props.navigateFunc(overview)}>Overview</button>
      </div>
      <div className='buttonSpacer'>
        <button className='secondaryButton' onClick={() => props.navigateFunc(producers)}>Producers</button>
      </div>
      <div className='buttonSpacer'>
        <button className='secondaryButton' onClick={() => props.navigateFunc(consumers)}>Consumers</button>
      </div>
      <div className='buttonSpacer'>
        <button className='secondaryButton' onClick={() => props.navigateFunc(topics)}>Topics</button>
      </div>
      <div className='buttonSpacer'>
        <button className='secondaryButton' onClick={() => props.navigateFunc(zookeeper)}>Zookeeper</button>
      </div>
    </div >
  )
}

export default NavigationPanel;