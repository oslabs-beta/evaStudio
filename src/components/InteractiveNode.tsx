import React, { useCallback } from 'react'
import { useSelector } from 'react-redux';
import ReactFlow from 'react-flow-renderer';

const flowCluster = (props: { type: string, kafkaCluster?: number }) => {
  const { type, kafkaCluster } = props;
  let nodeLabel = '';

  if (type === 'postgresql') {
    nodeLabel = 'PostgreSQL';
  } else if (type === 'jupyter') {
    nodeLabel = 'Jupyter Notebook';
  } else if (type === 'spark') {
    nodeLabel = 'Apache Spark';
  } else if (type === 'Kafka') {
    nodeLabel = `Kafka ${kafkaCluster}`;
  } else nodeLabel = type;

  return (
    <div className='flowCluster'>
      <h1>{nodeLabel}</h1>
    </div>
  )
}

export default flowCluster;