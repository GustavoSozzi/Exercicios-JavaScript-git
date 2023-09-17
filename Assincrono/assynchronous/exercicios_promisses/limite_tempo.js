const timeLimit = function (fn, t) {
  return async function (...args) {
    return new Promise((resolve, reject) => {
      const timeoutId = setTimeout(() => {
        clearTimeout(timeoutId);
        reject("Time Limit Exceeded");
      }, t);

      fn(...args)
        .then((result) => {
          clearTimeout(timeoutId);
          resolve(result);
        })
        .catch((error) => {
          clearTimeout(timeoutId);
          reject(error);
        });
    });
  };
};

const verifica_string = (variavel) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof variavel === "string") {
        resolve("eh uma string");
      } else {
        reject("nao e uma string");
      }
    }, 3000);
  });
};

const delayOfPromises = (ms) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Promessa resolvida após: " + ms + " Milisegundos")
        }, ms)
    })
}

delayOfPromises(2000)
    .then((result) => console.log(result))
    .catch((error) => console.log(error))

verifica_string(1000) //VERIFICANDO SE É UMA STRING
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

const limited = timeLimit((t) => new Promise((res) => setTimeout(res, t)), 100);
limited(150).catch(console.log); // "Time Limit Exceeded" at t=100ms
