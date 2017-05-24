import { MapStructure } from './Types'
import { isObject } from './Utils'

/**
 * Base class that represents single Graph node
 */
export class Node {
  private identifier: string
  private params: MapStructure<any>
  private edges: MapStructure<Node>

  public constructor(key: string, params?: MapStructure<any>) {
    this.identifier = key
    this.edges = {}
    if (typeof params != 'undefined' && isObject(params)) {
      this.params = params
    }
  }

  /**
   * Getter for node indentifier
   */
  public getId() {
    return this.identifier
  }

  /**
   * Getter for node connections
   */
  public getConnections() {
    return this.edges
  }

  /**
   * Add connection to another node
   */
  public addEdge(node: Node) {
    if (!this.edges[node.getId()]) {
      this.edges[node.getId()] = node
    }
  }
}
