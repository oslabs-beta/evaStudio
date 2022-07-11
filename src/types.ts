export type state = {
  httpLink: string
}

export type interactiveNode = {
  id: string,
  data: { label: JSX.Element },
  position: { x: number, y: number }
}