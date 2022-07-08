import React from 'react'
import CreateClustersPanel from '../components/CreateClustersPanel';
import DragCanvas from '../components/DragCanvas';

const CreateClustersContainer = () => {
  return (
    <div className='flex justify-between min-w-screen' id='createClustersContainer'>
      <div className='w-1/3'>
        <CreateClustersPanel />
      </div>
      <div className='w-2/3 bg-white' id='dragCanvas'>
        <DragCanvas />
      </div>
    </div>
  )
}

export default CreateClustersContainer;