import { getParamNames } from './PatternUtils'

/**
 * Extracts an object of params the given route cares about from
 * the given params object.
 */
function getRouteParams(route, params) {
  const routeParams = {}

  if (!route.path)
    return routeParams

  getParamNames(route.path).forEach(p => {
    if (Object.prototype.hasOwnProperty.call(params, p)) {
      routeParams[p] = params[p]
    }
  })

  return routeParams
}

export default getRouteParams
