export default function appendToEachArrayValue(array, appendString) {
  const freshArray = [];
  for (const value of array) {
    freshArray.push(appendString + value);
  }

  return freshArray;
}
