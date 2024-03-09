function signUpUser(firstName, lastName) {
  return new Promise((resolve) => {
    resolve({
      firstName: firstName,
      lastName: lastName,
    });
  });
}

signUpUser(' ', ' ').then(result => {
  // handle the resolved value of the Promise
  console.log(result); // { firstName: ' ', lastName: ' ' }
});
