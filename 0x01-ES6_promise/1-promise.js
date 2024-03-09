function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve({status: 200, body: 'Success'});
    } else {
      reject(new Error('The fake API is not working currently'));
    }
  });
}

getFullResponseFromAPI(true).then(result => {
  // handle the result of the asynchronous operation
  console.log(result); // { status: 200, body: 'Success' }
}).catch(error => {
  // handle the error of the asynchronous operation
  console.error(error); // Error: The fake API is not working currently
});
