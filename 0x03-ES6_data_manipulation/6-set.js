export default function setFromArray(array) {
  // check if input is an array
  if (!Array.isArray(array)) {
    throw new Error('Input must be an array');
  }

  // create a new Set from the array
  const set = new Set();

  // iterate over the array and add each element to the Set
  for (const element of array) {
    set.add(element);
  }

  // return the set
  return set;
}
