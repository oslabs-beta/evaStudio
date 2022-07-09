import React, { useCallback, useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import ReactFlow, {
  Controls,
  addEdge,
  Background,
  applyNodeChanges,
  applyEdgeChanges
} from 'react-flow-renderer';
import { initialNodes, initialEdges } from './InitialClusters';
import FlowCluster from './FlowCluster';

const defaultEdgeOptions = {
  id: 'edges-e2-2a',
  source: 'edges-2',
  target: 'edges-2a',
  type: 'smoothstep'
}

const DragCanvas = (): JSX.Element => { // holds the nodes in a dragable canvas playgound
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

  // Logic for adding new nodes on button click
  const yPos = useRef(550); // for setting position of first new node
  const [clusterCount, setClusterCount] = useState<Number>(1);

  const addCluster = () => {
    yPos.current += 100; // increments position of new node each time by 100
    setClusterCount(++clusterCount);

    const flowCluster = { // new Kafka Cluster / node user adds
      id: `${Math.random() * 125}`,
      data: { label: <FlowCluster clusterCount={clusterCount} /> },
      position: { x: 250, y: yPos.current }
    }

    setNodes((nds) => nds.concat(flowCluster)); // takes current nodes and concats the newest one to the end
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
      <button
        className='bg-gradient-to-r from-pink-600 to-orange-600 py-3 px-6 text-lg rounded-md w-48 flex items-center justify-center gap-2 text-white absolute top-[10px] left-[10px] z-[1000]'
        onClick={() => addCluster()}
      >
        Add Cluster
      </button>
    </div >
  )
}


export default DragCanvas;