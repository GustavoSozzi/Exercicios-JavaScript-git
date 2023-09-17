/*import axios from "axios";

function getRepository(name) {
  function onFulfilled(response) {
    console.log(response.data);
  }

  function onReject(reason) {
    console.log(reason.message);
  }

  axios
    .get(`https://api.github.com/repos/${name}`)
    .then(onFulfilled)
    .catch(onReject);
}

getRepository("facebook/react");*/

/*const timeout = (duration) => {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, duration);
  });
};

timeout(3000).then(function () {
  // executa o bloco após 3 segundos
  console.log("passaram 3 segundos");
});

function getTodosOsUsuarios() {
  return new Promise((resolve, reject) => {
    reject(new Error("Não foi possível recuperar a lista de usuários"));
  });
}

getTodosOsUsuarios().catch((err) => console.log(err.message)); // Não foi possível recuperar a lista de usuários

function getUsuarioById(id) {
  return new Promise((resolve, reject) => {
    resolve({ id, nome: "João da Silva" });
  });
}

getTodosOsUsuarios()
  .then((ids) => getUsuarioById(ids[0]))
  .then((usuario) => console.log(usuario)); // { id: 1, nome: 'João da Silva' }

// RETORNANDO UM ERRO

Promise.reject(new Error("falha na execução")).catch((err) =>
  console.log(err.message)
); // falha na execução*/


//TRY CATCH

const eh_par = num =>{
  return new Promise((resolve, reject) => {
    if (num %2 === 0){
      resolve("Operação  concluida com sucesso, eh par")
    }
    else{
      reject("Operação negada, a operação nao é par")
    }
  })
}

const eh_impar = num => {
 if(num %2 !== 0 ){
  return "O numero e impar"
 }
 else{
  return "O numero é par"
 }
}

console.log(eh_par(10))
console.log(eh_impar(4))

const loginUser = (email, password, callback) => {
  setTimeout(() => {
    console.log("user logged");
    callback({email}) //criando objeto com chave e email
  }, 1500)

  console.log("after setTimeOut")
}

const user = loginUser("felipe@gmail.com", "123456" , (user) => {
  console.log({user})
})

function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(typeof msg !== 'string') {
        reject('CAI NO ERRO');
        return;
      }

      resolve(msg.toUpperCase() + ' - Passei na promise');
      return;
    }, tempo);
  });
}

function baixaPagina() {
  const emCache = true;

  if(emCache) {
    return Promise.resolve('Página em cache');
  } else {
    return esperaAi('Baixei a página', 3000);
  }
}

baixaPagina()
  .then(dadosPagina => {
    console.log(dadosPagina);
  })
  .catch(e => console.log('ERRO', e));