export default function getResponseFromAPI() {
  return new Promise((resolve) => {
    // perform some asynchronous operation
    // when the operation is complete, call resolve with the result
    resolve('Success');
  });
}
