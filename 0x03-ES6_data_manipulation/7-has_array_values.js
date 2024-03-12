export default function hasValuesFromArray(set, array) {
  // iterate over the array and check if each element exists in the Set
  for (const element of array) {
    if (!set.has(element)) {
      return false;
    }
  }

  // if all elements exist in the Set, return true
  return true;
}
