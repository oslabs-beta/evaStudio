import React from 'react'
import { useDispatch } from 'react-redux';
import { updateNumOfClusters } from '../actions/clusterInfo';

const CreateClustersPanel = (): JSX.Element => {
  const dispatch = useDispatch();

  return (
    <div className='w-full bg-slate-700 rounded-lg mx-auto px-10 py-16 max-w-xl text-white' id='CreateClusters'>
      <h1 className='text-3xl font-bold'>Create Development Clusters</h1>
      <div className='flex flex-col md:flex-row gap-4 items-center'>
        {/* <form className='mt-[20px]' id='clusterForm'>
          <label>Number of Clusters:</label>
          <input className='text-black' type='number' onChange={(e) => {
            const inputVal: number = parseInt(e.target.value);
            dispatch(updateNumOfClusters(inputVal));
          }}>
          </input>
        </form> */}
        <div className='flex flex-col m-0 pt-[10px]'>
          <h3 className='mt-[5px]'>Step 1:</h3>
          <p>Add clusters and connect them</p>
          <h3 className='mt-[5px]'>Step 2:</h3>
          <p>Add clusters and connect them</p>
          <h3 className='mt-[5px]'>Step 3:</h3>
          <p>Add clusters and connect them</p>
          <h3 className='mt-[5px]'>Step 4:</h3>
          <p>Add clusters and connect them</p>
        </div>
      </div>
    </div>
  )
}

export default CreateClustersPanel;