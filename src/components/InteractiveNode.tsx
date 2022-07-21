import React from 'react'
import jupyterLogo from '../assets/jupyter.svg';
import kafkaLogo from '../assets/kafka.svg';
import sparkLogo from '../assets/spark.svg';
import postgresLogo from '../assets/postgres.svg';


const flowCluster = (props: { type: string, kafkaCluster?: number }) => {
  const { type, kafkaCluster } = props;
  let nodeLabel;
  let nodeImg;
  let nodeColor;

  switch(type) {
  case 'postgresql':
      nodeLabel = 'PostgreSQL';
      nodeImg = postgresLogo;
      nodeColor = 'bg-sky-500/100';
    break;
  case 'jupyter':
    // code block
      nodeLabel = 'Jupyter Notebook'
      nodeImg = jupyterLogo;
      nodeColor = 'bg-orange-600';
      break;
    case 'spark':
      nodeLabel = 'Apache Spark'
      nodeImg = sparkLogo;
      nodeColor = 'bg-orange-600';
      break;
  case 'Kafka':
      nodeLabel = `Kafka ${kafkaCluster}`
      nodeImg = kafkaLogo;
      nodeColor = 'bg-stone-500';
    break;
  default:
    nodeLabel = type;
}

  return (
    <div className={`flowCluster flex items-center justify-center ${nodeColor} text-white p-[10px] rounded-sm bg-opacity-70`}>
      <img className='w-5 h-5 mr-[5px]' src={nodeImg} alt={nodeLabel} />
      <h1>{nodeLabel}</h1>
    </div>
  )
}

export default flowCluster;