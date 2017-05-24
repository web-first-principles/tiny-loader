import * as path from 'path'
import { parse } from 'babylon'

/**
 * Check if value is a correct object
 */
export function isObject(value: any): boolean {
  return (
    typeof value == 'object' &&
    ({}).toString.call(value) == '[object Object]'
  )
}

/**
 * Check if object has certain property the right way
 */
export function hasProperty(target: object, propKey: string): boolean {
  return ({}).hasOwnProperty.call(target, propKey)
}

/**
 * Get object values as an array
 */
export function getObjectValues(target: Object): Array<any> {
  const objKeys = Object.keys(target)
  const responseArray: Array<any> = []

  type MapObject<T> = {
    [index: string]: T
  };

  objKeys.forEach(function (key: string) {
    responseArray.push((<MapObject<any>>target)[key])
  })

  return responseArray
}

export function checkModuleExtension(modulePath: string): boolean {
  const validExtensions: Array<string> = [
    'js',
    'es6',
    'ts'
  ]

  if (validExtensions.indexOf(path.extname(modulePath).slice(1)) > -1) {
    return true
  } else {
    return false
  }
}

type Token = any

type ParserResponse = {
  tokens: Array<Token>,
  ast: any
}

export enum ErrorTypes {
  ParseError,
  ExtError
}

export class ParseError extends Error {
  public type: ErrorTypes
  constructor(message: string) {
    super(message)
    this.type = ErrorTypes.ParseError
  }
}

export function parseSource(source: string): ParserResponse {
   try {
      const ast: any = parse(source, {
        sourceType: 'module'
      })

      const tokens: Array<Token> = ast.tokens

      return {
        ast,
        tokens
      }

    } catch (error) {
      throw new ParseError('Error while parsing entry file')
    }
}
