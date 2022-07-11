import React, { useCallback, useState, useRef } from 'react';
import { interactiveNode } from '../types';
import ReactFlow, {
  Controls,
  addEdge,
  Background,
  applyNodeChanges,
  applyEdgeChanges
} from 'react-flow-renderer';
import { initialNodes, initialEdges } from './InitialClusters';
import InteractiveNode from './InteractiveNode';
import DropdownConfigs from './DropdownConfigs';
import { useSelector } from 'react-redux';

// Default options for line that connects nodes
const defaultEdgeOptions = {
  id: 'edges-e2-2a',
  source: 'edges-2',
  target: 'edges-2a',
  type: 'smoothstep'
}

const DragCanvas = (): JSX.Element => { // holds the nodes in a dragable canvas playgound
  const { dataSource, numOfClusters, sync } = useSelector((state: any) => state.pipelineConfig);

  // all logic below pertains to setting new nodes and arrows between them
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes]
  );
  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [setEdges]
  );
  const onConnect = (params) => setEdges((eds) => addEdge(params, eds)); // for connecting the nodes to each other


  // Logic for adding new nodes on dropdown menu option click
  const yPos = useRef(550); // for setting position of first new node

  const addNode = (type, nodeCount) => {
    yPos.current += 100; // increments position of new node each time by 100
    const resultArray: Array<interactiveNode> = [];

    for (let i = 0; i < nodeCount; i++) {
      resultArray.push(
        {
          id: `Node ${i + 1}`,
          data: { label: <InteractiveNode type={type} /> },
          position: { x: 250, y: yPos.current }
        }
      )
    }

    setNodes((nds) => nds.concat(...resultArray)); // takes current nodes and concats the newest one to the end
  }

  return (
    <div className='w-[100%] h-[85vh] relative' id='dragCanvas'>
      <ReactFlow
        className='z-[999]'
        nodes={nodes}
        edges={edges}
        defaultNodes={nodes}
        defaultEdges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        defaultEdgeOptions={defaultEdgeOptions}
        fitView
      >
        <Background color='#1A192B' />
        <Controls />
      </ReactFlow>
      <DropdownConfigs addNode={addNode} />
    </div >
  )
}


export default DragCanvas;