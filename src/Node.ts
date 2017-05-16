import { MapStructure } from './Types'
import { isObject } from './Utils'

/**
 * Base class that represents single Graph node
 */
export class Node {
  private identifier: string
  private params: MapStructure<any>
  private edges: MapStructure<Node>

  constructor(key: string, params?: MapStructure<any>) {
    this.identifier = key
    this.edges = {}
    if (typeof params != 'undefined' && isObject(params)) {
      this.params = params
    }
  }

  /**
   * Getter for node indentifier
   */
  getId() {
    return this.identifier
  }

  /**
   * Getter for node connections
   */
  getConnections() {
    return this.edges
  }

  /**
   * Add connection to another node
   */
  addEdge(node: Node) {
    if (!this.edges[node.getId()]) {
      this.edges[node.getId()] = node
    }
  }
}
