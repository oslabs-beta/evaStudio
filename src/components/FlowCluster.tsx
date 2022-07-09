import React, { useCallback } from 'react'
import { useSelector } from 'react-redux';
import ReactFlow from 'react-flow-renderer';

const flowCluster = () => {
  const { numOfClusters } = useSelector((state: any) => state.clusterInfo);

  return (
    <div className='flowCluster'>
      <h1>Kafka {numOfClusters}</h1>
    </div>
  )
}

export default flowCluster;