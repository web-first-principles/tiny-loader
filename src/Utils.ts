/**
 * Basic utilities functions, reused across project
 */

/**
 * Check if value is a correct object
 * @param value just any value that could be passed
 * @returns checking results
 */
export function isObject(value: any): boolean {
  return (
    typeof value == 'object' &&
    ({}).toString.call(value) == '[object Object]'
  )
}

/**
 * Check if object has certain property the right way
 * @param target
 * @param propKey
 * @returns checking results
 */
export function hasProperty(target: object, propKey: string): boolean {
  return ({}).hasOwnProperty.call(target, propKey)
}
