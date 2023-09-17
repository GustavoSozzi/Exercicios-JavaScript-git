const login = (nome, email, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let error = false;

      if (error) {
        reject(new Error("Erro no login"));
      } else {
        console.log("Usuário logado");
        resolve({ email });
      }
    }, 3000);
  });
};
login("Gustavo sozzi bom", "bomgustavo10@gmail.com", "123456")
  .then((user) => {
    console.log("usuario com email: " + "sucesso: " + user.email);
  })
  .catch((err) => {
    console.log("Falha: " + err.message);
  });

const betterDeveloper = 'zezinhoDapadaria'

function whoBetterCallback(callback, errorCallback) {
  return new Promise((resolve, reject) => {
    if (betterDeveloper !== Gustavo && betterDeveloper !== alice) {
      reject({
        name: "Nome errado",
        message: betterDeveloper + " é realmente melhor?",
      });
    } else {
      resolve({
        name: betterDeveloper,
        message: "CDFS são os melhores",
      });
    }
  });
}

whoBetterCallback()
  .then((result) => {
    console.log(result.name + "? yeah" + result.name);
  })
  .catch((error) => {
    console.log("error.name: ' + " + error.message);
  });
