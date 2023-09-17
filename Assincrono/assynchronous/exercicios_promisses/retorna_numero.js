const addtwoPromises = async (promise1, promise2) => {
  const [value1, value2] = await Promise.all([promise1, promise2]);//aguarda a resolução de todas as promises

  // Return a new promise that resolves with the sum of the values
  return value1 + value2;
};

const promise1 = (() => { //criando arrow functions auto invocadas
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(2);
        }, 20);
        }); //com arrow function
})()

const promise2 = (() => {
     return new Promise((resolve) => {
      setTimeout(() => {
        resolve(5);
      }, 60);
    });
  })();
  

addtwoPromises(promise1, promise2).then(console.log); // Output: 7 //quando for bem sucedido


//PEGAR A MULTIPLICAÇÃO DE DUAS PROMISSES E MOSTRANDO O RESULTADO


const multtwoPromises = async (promise1, promise2) => {
    const [valor1, valor2] = await Promise.all([promise1, promise2])

    return valor1 * valor2
}

const mult1 = (() => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(5 * 2);
        }, 2000)
    })
})()

const mult2 = (() => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(10 * 2)
        }, 3000)
    })
})()

multtwoPromises(mult1, mult2)
    .then(console.log)
    .catch(error => console.log(error)) //chamando os erros 
    //RESULTADO IGUAL A 200
