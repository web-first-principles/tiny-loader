import { MapStructure } from './Types'
import { Node } from './Node'
import { isObject, hasProperty } from './Utils'

export class Graph {
  private graph: MapStructure<Node>

  constructor() {
    this.graph = {}
  }

  addNode(key: string, params: MapStructure<any>) {
    params = params || {}
    if (!hasProperty(this.graph, key)) {
      if (!isObject(params)) {
        throw new Error('Node params should be a proper object')
      }
      this.graph[key] = new Node(key, params)
    }
  }
}
