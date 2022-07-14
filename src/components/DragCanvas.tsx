import React, { useCallback, useState, useRef } from 'react';
import { interactiveNode } from '../types';
import ReactFlow, {
  Controls,
  addEdge,
  Background,
  applyNodeChanges,
  applyEdgeChanges,
  Node,
  Edge,
  NodeChange,
  EdgeChange,
  Connection
} from 'react-flow-renderer';
import { initialNodes, initialEdges } from './InitialClusters';
import InteractiveNode from './InteractiveNode';
import DropdownConfigs from './DropdownConfigs';

// Default options for lines that connect nodes on canvas
const defaultEdgeOptions = {
  key: `Edge Option ${Math.random() * 123}`,
  source: 'edges-2',
  target: 'edges-2a',
  type: 'smoothstep'
}

// holds the nodes in a dragable canvas playgound
const DragCanvas = (): JSX.Element => {
  const [nodes, setNodes] = useState<Node[]>(initialNodes); // initialize nodes to be the default nodes
  const [edges, setEdges] = useState<Edge[]>(initialEdges); // initialize edges (lines that connect nodes) to the defaults

  const onNodesChange = useCallback(
    (changes: NodeChange[]) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes]
  );
  const onEdgesChange = useCallback(
    (changes: EdgeChange[]) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [setEdges]
  );
  const onConnect = (connection: Connection) => setEdges((eds) => addEdge(connection, eds)); // for connecting the nodes to each other


  // Logic for adding new nodes on dropdown menu option click
  const yPos = useRef(250); // setting position of first new node, then stores future values too
  const xPos = useRef(50); // setting position when multiple nodes are rendered, then stores future values too

  // The magic function: adds new nodes to the canvas based on user input
  const addNode = (type, nodeCount, option) => {
    yPos.current += 100; // increments position of new node each time by 100
    const resultArray: Array<interactiveNode> = [];

    // If the option selected is coming from the data source dropdown menu
    if (option === 'source') {
      resultArray.push({
        key: `Source Node ${Math.random() * 1231}`,
        id: 'Data Source Node',
        type: 'input',
        data: { label: <InteractiveNode type={type} /> },
        position: { x: 250, y: yPos.current }
      });

      return setNodes(resultArray); // since first node added is the data source, which in our app can only be 1 right now, can return new node array
    }

    // If the option selected is coming from the Kafka dropdown menu
    if (option === 'kafka') {
      for (let i = 0; i < nodeCount; i++) {
        const kafkaNode = {
          key: `Kafka Node ${Math.random() * 1231}`,
          id: `Node ${i + 1}`,
          data: { label: <InteractiveNode type={type} kafkaCluster={i + 1} /> },
          position: { x: xPos.current, y: yPos.current }
        }

        resultArray.push(kafkaNode);
        xPos.current += 200;
      }
      return setNodes((nds) => nds.concat(...resultArray)); // set nodes to be the previous array concatted with the new result array's node(s)
    }

    // if the option selected is coming from the sink dropdown menu
    if (option === 'sink') {
      const sinkNode = {
        key: `Sink Node ${Math.random() * 1231}`,
        id: 'Sink Node',
        type: 'output',
        data: { label: <InteractiveNode type={type} /> },
        position: { x: 250, y: yPos.current }
      }

      // find the visual node and replace it on canvas IF IT EXISTS
      setNodes(nds => nds.concat(...[sinkNode]));
    }
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