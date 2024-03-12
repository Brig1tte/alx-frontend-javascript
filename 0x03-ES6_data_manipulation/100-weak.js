export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  // retrieve values from the weakmap and if not, set it to 0
  let countCalled = weakMap.get(endpoint) || 0;
  // increment to the value
  countCalled += 1;
  // create a new key-value pair in the weakmap
  weakMap.set(endpoint, countCalled);
  // if endpoint is queried more than 5 times, throw an error
  if (countCalled >= 5) throw new Error('Endpoint load is high');
  // return the value of times the api is queried
  return countCalled;
}
