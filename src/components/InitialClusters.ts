import { Node, Edge } from 'react-flow-renderer';

// Initial nodes / edges to load on page load
export const initialNodes: Node[] = [
  {
    id: '1',
    type: 'input',
    data: { label: 'Zookeeper' },
    position: { x: 250, y: 450 },
  },
  {
    id: '2',
    data: { label: 'Kafka 1' },
    position: { x: 250, y: 550 },
  }
];

export const initialEdges: Edge[] = [
  { id: 'el-1', source: '1', target: '2' }
];