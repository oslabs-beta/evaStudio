import React, { useCallback } from 'react'
import ReactFlow from 'react-flow-renderer';

const flowCluster = (props) => {
  return (
    <div className='flowCluster'>
      <h1>Kafka {props.clusterCount}</h1>
    </div>
  )
}

export default flowCluster; 