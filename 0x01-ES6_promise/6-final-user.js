import signUpUser from './4-user-promise.js';
import uploadPhoto from './5-photo-reject.js';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.all([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then(values => {
      return values.map((value, index) => {
        return {
          status: value instanceof Error ? 'rejected' : 'resolved',
          value: value,
        };
      });
    });
}

handleProfileSignup('firstName', 'lastName', '$fileName').then(results => {
  // handle the results of the Promise
  console.log(results);
  // [
  //   {
  //     status: 'rejected',
  //     value: Error: ${fileName} cannot be processed
  //   },
  //   {
  //     status: 'resolved',
  //     value: { firstName: ' ', lastName: ' ' }
  //   }
  // ]
});
