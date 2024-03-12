export default function cleanSet(theSet, startString) {
  // check if the beginning of string is not empty and is a string
  if (!startString || !startString.length || typeof startString !== 'string') return '';
  // create an empty string to store cleanSet
  let result = '';
  // iterate over the set and slices string from the startString length and appends '-'
  theSet.forEach((item) => {
    if (item && item.startsWith(startString)) result += `${item.slice(startString.length)}-`;
  });
  // remove the last appended '-' and return the result (cleanSet)
  return result.slice(0, result.length - 1);
}
