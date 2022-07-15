export type state = {
  httpLink: string
}

export type interactiveNode = {
  key: string,
  id: string,
  type?: 'input' | 'output',
  data: { label: JSX.Element },
  position: { x: number, y: number }
}