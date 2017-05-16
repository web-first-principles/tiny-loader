import { MapStructure } from './Types'
import { Node } from './Node'

import {
  isObject,
  hasProperty,
  getObjectValues
} from './Utils'

export class Graph {
  private graph: MapStructure<Node>

  constructor() {
    this.graph = {}
  }

  addNode(key: string, params: MapStructure<any>): void {
    if (!hasProperty(this.graph, key)) {
      if (!isObject(params)) {
        throw new Error('Node params should be a proper object')
      }
      this.graph[key] = new Node(key, params)
    }
  }

  addEdge(start: string, end: string): void {
    this.addNode(start, {})
    this.addNode(end, {})
    this.graph[start].addEdge(this.graph[end])
  }

  getConnections(key: string): Array<Node> {
    return hasProperty(this.graph, key)
      ? getObjectValues('test')
      : []
  }
}
