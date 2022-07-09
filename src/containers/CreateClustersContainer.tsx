import React from 'react'
import CreateClustersPanel from '../components/CreateClustersPanel';
import DragCanvas from '../components/DragCanvas';

const CreateClustersContainer = () => {
  return (
    <div className='flex flex-col justify-center items-center w-[100vw]' id='createClustersContainer'>
      <div className='flex flex-row w-[90vw]'>
        <div className='w-1/4 mr-[40px]'>
          <CreateClustersPanel />
        </div>
        <div className='w-3/4 bg-white' id='dragCanvasContainer'>
          <DragCanvas />
        </div>
      </div>
    </div>
  )
}

export default CreateClustersContainer;