import * as types from './Types'

import {
  isObject,
  checkModuleExtension,
  parseSource
} from './Utils'

import { Node } from './Node'
import { Graph } from './Graph'
import { parse } from 'babylon'

import {
  LinkedNode,
  LinkedList
} from './LinkedList'

interface EntryConfig {
  name: string,
  path: string,
  props?: types.MapStructure<any>,
  source: string
}

interface Module {
  name: string,
  path: string,
  source: string
}

/**
 * Base class for creating main bundle
 * from defined entry point
 * @class Bundle
 */
export class Bundle {
  public name: string
  public path: string
  public props: object = {}
  public source: string
  public fileExt: string

  private depsGraph: Graph
  private ast: any
  private tokens: Array<any>

  constructor(entry: EntryConfig) {
    this.name = entry.name
    this.path = entry.path
    this.source = entry.source
    this.depsGraph = new Graph

    if (!checkModuleExtension(this.name)) {
      throw new Error('Incorrect module extension type')
    }

    if (isObject(entry.props)) {
      this.props = entry.props
    }

    const parsed = parseSource(this.source)

    this.ast = parsed.ast
    this.tokens = parsed.tokens
  }

  public collectImports(): void {
    const linkedList: LinkedList = LinkedList.create(this.tokens)
    var currentNode: LinkedNode = linkedList.head
    while (<LinkedNode>currentNode.next) {
      currentNode = currentNode.next
      if (currentNode.value.type.label == 'import') {
        currentNode = currentNode.next
        console.log(currentNode)
        if (currentNode.value.type.label == '{') {
          currentNode = currentNode.next
          const imports = [currentNode.value]
          while (currentNode.value.type.label != '}') {
            console.log('while')
            imports.push(currentNode.value)
            currentNode = currentNode.next
          }

          console.log('imports', imports)
        }
      }
    }

   //console.log(linkedTokens)
  }

  /**
   * @public
   * Static helper for creating bundle from entry point
   */
  public static create(config: EntryConfig) {
    return new Bundle(config)
  }
}
