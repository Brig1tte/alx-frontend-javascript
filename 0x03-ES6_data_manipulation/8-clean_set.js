export default function cleanSet(set, startString) {
  // check if the beginning of the string is not empty and is a string
  if (!startString || !startString.length || typeof startString !== 'string')
	return '';

  // create an empty string to store cleaned set values
  let result = '';

  // iterate over the Set and slice the string form the startString length and append '-'
  set.forEach((item) => {
    if (item && item.startsWith(startString)) result += `${item.slice(startString.length)}-`;
  });

  // remove the last appended '-' character and return the result
  return result.slice(0, result.length - 1);
}
