import React from 'react'
import { useDispatch } from 'react-redux';
import { updateNumOfClusters } from '../actions/clusterInfo';

const CreateClustersPanel = (): JSX.Element => {
  const dispatch = useDispatch();

  const createClusters = () => {
    // request to backend for Andres goes in here
  }

  return (
    <div className='w-full bg-slate-700 rounded-lg mx-auto px-10 py-16 max-w-xl text-white' id='CreateClusters'>
      <h1 className='text-3xl font-bold'>Create Development Clusters</h1>
      <div className='flex flex-col md:flex-row gap-4 items-center'>
        <div className='flex flex-col m-0 pt-[10px]'>
          <h3 className='mt-[5px]'>Step 1:</h3>
          <p>Add clusters and connect them</p>
          <h3 className='mt-[5px]'>Step 2:</h3>
          <p>Add clusters and connect them</p>
          <h3 className='mt-[5px]'>Step 3:</h3>
          <p>Add clusters and connect them</p>
          <h3 className='mt-[5px]'>Step 4:</h3>
          <p>Add clusters and connect them</p>
          <button
            className='bg-gradient-to-r from-pink-600 to-orange-600 py-3 px-6 text-lg rounded-md w-48 flex items-center justify-center gap-2'
            onClick={createClusters}
          >
            Create Clusters
          </button>
        </div>
      </div>
    </div>
  )
}

export default CreateClustersPanel;