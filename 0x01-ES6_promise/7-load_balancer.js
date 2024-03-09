export default function loadBalancer(chinaDownload, USDownload) {
  return Promise.race([chinaDownload, USDownload])
    .then(value => {
      if (value instanceof Error) {
        return Promise.race([chinaDownload, USDownload])
          .then(value => value);
      } else {
        return value;
      }
    });
}

const chinaDownload = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('China download complete');
  }, 1000);
});

const USDownload = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('US download failed'));
  }, 500);
});

loadBalancer(chinaDownload, USDownload).then(value => {
  // handle the value returned by the first resolved Promise
  console.log(value); // China download complete
}).catch(error => {
  // handle the error of the first rejected Promise
  console.error(error);
});
