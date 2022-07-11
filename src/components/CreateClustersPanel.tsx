import React from 'react'
import axios from 'axios';
import { useSelector } from 'react-redux';

const CreateClustersPanel = (): JSX.Element => {
  const clusterInfo = useSelector((state: any) => state.pipelineConfig);

  const createClusters = () => {
    // request to backend for Andres goes in here
    axios.post('/magic', clusterInfo)
      .then(res => console.log(res));
  }

  return (
    <div className='w-full bg-slate-700 rounded-lg mx-auto px-10 py-16 max-w-xl text-white' id='CreateClusters'>
      <h1 className='text-3xl font-bold'>Create a Data Pipeline</h1>
      <div className='flex flex-col md:flex-row gap-4 items-center'>
        <div className='flex flex-col m-0 mt-[15px]'>

          <h3 className='mt-[15px] mb-[5px] font-semibold'>Step 1 - Choose a Data Source</h3>
          <p className='ml-[10px]'>Add clusters and connect them</p>

          <h3 className='mt-[15px] mb-[5px] font-semibold'>Step 2 - Select the Number of Kafka Clusters</h3>
          <p className='ml-[10px]'>Add clusters and connect them</p>

          <h3 className='mt-[15px] mb-[5px] font-semibold'>Step 3 - Choose Your Preferred Sync</h3>
          <p className='ml-[10px]'>Add clusters and connect them</p>

          <h3 className='mt-[15px] mb-[5px] font-semibold'>Step 4 - Create Data Pipeline</h3>
          <p className='ml-[10px]'>When finished designing your data pipeline, click "Create Pipeline" below to locally launch your containers.</p>

          <button
            className='bg-gradient-to-r from-pink-600 to-orange-600 py-3 px-6 text-lg rounded-md w-48 flex items-center justify-center gap-2 mt-[35px]'
            onClick={createClusters}>
            Create Pipeline
          </button>

        </div>
      </div>
    </div>
  )
}

export default CreateClustersPanel;