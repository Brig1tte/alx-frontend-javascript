export default function appendToEachArrayValue(array, appendString) {
  for (const [idx, value] ofentries()) {
    array[idx] = appendString + value;
  }

  return array;
}
