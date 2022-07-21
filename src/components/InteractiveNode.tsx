import React from 'react'
import jupyterLogo from '../assets/jupyter.svg';
import kafkaLogo from '../assets/kafka.svg';
import sparkLogo from '../assets/spark.svg';
import postgresLogo from '../assets/postgres.svg';


const flowCluster = (props: { type: string, kafkaCluster?: number }) => {
  const { type, kafkaCluster } = props;
  let nodeLabel;
  let nodeImg;

  switch(type) {
  case 'postgresql':
      nodeLabel = 'PostgreSQL';
      nodeImg = postgresLogo;
    break;
  case 'jupyter':
    // code block
      nodeLabel = 'Jupyter Notebook'
      nodeImg = jupyterLogo;
      break;
    case 'spark':
      nodeLabel = 'Apache Spark'
      nodeImg = sparkLogo;
      break;
  case 'Kafka':
      nodeLabel = `Kafka ${kafkaCluster}`
      nodeImg = kafkaLogo;
    break;
  default:
    nodeLabel = type
}

  return (
    <div className='flowCluster flex items-center justify-center gap-1'>
      <img className='w-5 h-5' src={nodeImg} alt={nodeLabel} />
      <h1>{nodeLabel}</h1>
    </div>
  )
}

export default flowCluster;