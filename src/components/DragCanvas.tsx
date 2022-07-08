import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Xarrow, { useXarrow, Xwrapper } from 'react-xarrows';
import Draggable from 'react-draggable';

const boxStyle = { border: 'grey solid 2px', borderRadius: '10px', padding: '5px' };

const DraggableCluster: JSX.Element = ({ id }) => { // creates the cluster node to drag in the canvas
  const updateXarrow = useXarrow();
  return (
    <Draggable onDrag={updateXarrow} onStop={updateXarrow}>
      <div id={id} style={boxStyle}>
        {id}
      </div>
    </Draggable>
  )
}

const DragCanvas: JSX.Element = () => { // holds the nodes in a dragable canvas playgound
  const { numOfClusters } = useSelector((state: any) => state.clusterInfo);
  const draggableClusters: Array<JSX.Element> = [];

  for (let i: number = 0; i < numOfClusters; i++) {
    draggableClusters.push(
      <DraggableCluster id={`Cluster ${i + 1}`} />
    )
  }

  const initialClusters = [
    <DraggableCluster id='Build Clusters' />,
    <DraggableCluster id='Visually!' />
  ];
  const [initalLoad, setInitialLoad] = useState(true);

  return (
    <div id='dragCanvas'>
      <h1>Drag Canvas</h1>
      <Xwrapper>
        {initalLoad ? initialClusters : draggableClusters}
        {initalLoad ? <Xarrow start={'Build Clusters'} end={'Visually!'} /> : <Xarrow start={'Cluster 1'} end={`Cluster ${draggableClusters.length}`} />}
      </Xwrapper>
    </div>
  )
}

export default DragCanvas;