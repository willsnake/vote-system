export const searchIneApi = (error = false) => {
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      if (error === true) {
        reject({ message: 'something went wrong', status: 503 });
      }
      resolve();
    }, 1000)
  );
};
