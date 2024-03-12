export default function cleanSet(set, startString) {
  // create an empty string to store cleaned set values
  let cleanedString = '';

  // iterate over the Set and check if each value starts with the startString
  for (const value of set) {
    if (typeof value === 'string' && value.startsWith(startString)) {
      // if value starts with the startString, append the rest of the string to the cleanedString
      cleanedString += value.slice(startString.length) + '-';
    }
  }

  // remove the last '-' character and return the cleanedString
  return cleanedString.slice(0, -1);
}
