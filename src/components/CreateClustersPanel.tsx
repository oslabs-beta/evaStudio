import React from 'react'
import { useDispatch } from 'react-redux';
import { updateNumOfClusters } from '../actions/clusterInfo';

const CreateClustersPanel = () => {
  const dispatch: any = useDispatch();

  return (
    <div className='w-full' id='CreateClusters'>
      <h1>Create Development Clusters</h1>
      <div>
        <form id='clusterForm'>
          <label>Number of Clusters:</label>
          <input type='number' onChange={(e) => {
            const inputVal: number = parseInt(e.target.value);
            dispatch(updateNumOfClusters(inputVal));
          }}>
          </input>
        </form>
      </div>
    </div>
  )
}

export default CreateClustersPanel;