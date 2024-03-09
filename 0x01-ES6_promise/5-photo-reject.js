export default function uploadPhoto(filename) {
  return new Promise((resolve, reject) => {
    reject(new Error(`${filename} cannot be processed`));
  });
}

uploadPhoto('${filename}').catch(error => {
  // handle the rejection reason of the Promise
  console.error(error); // Error: ${fileName} cannot be processed
});
