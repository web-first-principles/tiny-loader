/**
 * Basic utilities functions, reused across project
 */

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
