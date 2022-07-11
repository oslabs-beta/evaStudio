import React from 'react'
import { useDispatch } from 'react-redux';
import { setDataSource, updateNumOfClusters, setSink } from '../actions/pipelineConfig';

const DropdownConfigs = (props: { addNode: Function }) => {
  const dispatch = useDispatch();
  const { addNode } = props; // for dynamically adding nodes based off of user input

  return (
    <div className='absolute top-[10px] left-[10px] z-[1000] flex flex-row' id='dropdownConfigs'>

      <div className='pr-[35px]'>
        <h4 className='underline'>Data Source</h4>
        <select className='border-[2px] rounded-md p-[5px]' id='source' onChange={(e) => {
          dispatch(setDataSource(e.target.value)); // update Redux store with the user's selected value
          addNode(e.target.value, 1, 'source'); // add a draggable node from userInput
        }}>
          <option>Select Source...</option>
          <option value='postgresql'>PostgreSQL</option>
          <option value='http'>http://</option>
        </select>
      </div>

      <div className='pr-[35px]'>
        <h4 className='underline'>Number of Kafka Clusters</h4>
        <select className='border-[2px] rounded-md p-[5px]' id='kafka' onChange={(e) => {
          dispatch(updateNumOfClusters(e.target.value)); // update Redux store with the user's selected value
          addNode('Kafka', parseInt(e.target.value), 'kafka'); // add a draggable node from userInput
        }}>
          <option>Select # of Clusters...</option>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
      </div>

      <div className='pr-[35px]'>
        <h4 className='underline'>Sink</h4>
        <select className='border-[2px] rounded-md p-[5px]' id='sink' onChange={(e) => {
          dispatch(setSink(e.target.value)); // update Redux store with the user's selected value
          addNode(e.target.value, 1, 'sink'); // add a draggable node from userInput
        }}>
          <option>Select Sink...</option>
          <option value='jupyter'>Jupyter Notebook</option>
          <option value='spark'>Apache Spark</option>
        </select>
      </div>

    </div>
  )
}

export default DropdownConfigs;