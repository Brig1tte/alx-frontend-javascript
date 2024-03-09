export default function divideFunction(numerator, denominator) {
  if (denominator === 0) {
    throw new Error('cannot divide by 0');
  } else {
    return numerator / denominator;
  }
}

try {
  const result = divideFunction(10, 2);
  console.log(result); // 5
} catch (error) {
  // handle the error
  console.error(error);
}

try {
  const result = divideFunction(10, 0);
  console.log(result);
} catch (error) {
  // handle the error
  console.error(error); // Error: cannot divide by 0
}
