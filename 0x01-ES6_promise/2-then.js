function handleResponseFromAPI(promise) {
  promise
    .then(result => {
      console.log('Got a response from the API');
      return {status: 200, body: 'success'};
    })
    .catch(error => {
      console.log('Got a response from the API');
      return new Error('No data');
    });
}

handleResponseFromAPI(getFullResponseFromAPI(true)).then(result => {
  // handle the result of the asynchronous operation
  console.log(result); // { status: 200, body: 'Success' }
}).catch(error => {
  // handle the error of the asynchronous operation
  console.error(error); // Error: No data
});
