export default function hasValuesFromArray(set, array) {
  // check if input is a Set and an Array
  if (!set instanceof Set || !Array.isArray(array)) {
    throw new Error('Both inputs must be a Set and an Array');
  }

  // iterate over the array and check if each element exists in the Set
  for (const element of array) {
    if (!set.has(element)) {
      return false;
    }
  }

  // if all elements exist in the Set, return true
  return true;
}
