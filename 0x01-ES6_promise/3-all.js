import { uploadPhoto, createUser } from './utils.js';

export default function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()]).then(
    (values) => {
      console.log(`${values[0].body} ${values[1].firstName.lastName}`);
    },
  ).catch(() => {
    console.error('Signup system offline');
    });
}
