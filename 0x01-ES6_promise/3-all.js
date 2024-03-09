import { uploadPhoto, createUser } from './utils.js';

function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()])
    .then(values => {
      console.log(`${values[0].body.firstName} ${values[0].body.lastName}`);
    })
    .catch(() => {
      console.error('Signup system offline');
    });
}
