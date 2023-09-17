function primeiraFuncao() {
  console.log("Esperou isso");
}

async function segundaFuncao() {
  console.log("Iniciou");

  await primeiraFuncao();

  console.log("Agora executou isso!");
}

segundaFuncao();

function getUser(id) {
  return fetch(`https://reqres.in/api/users?id=${id}`)
    .then((data) => data.json())
    .catch((err) => console.log(err));
}

async function showUserName(id) {
  const user = await getUser(id);

  console.log(`O nome do usuário é ${user.data.first_name}`);
}

showUserName(1); // O nome do usuário é George*/

async function calcula(num1, num2) {
  console.log("\nEsperandooo o calculo ser aprovado");

  const posso_calcular = await valida_operacao();
  let soma = 0;

  if (posso_calcular) {
    console.log("\noperação foi validada");

    soma = num1 + num2;

    console.log("resultado da soma: " + soma);
  } else {
    console.log("operação nao validada");
  }
}

const valida_operacao = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let valid = true;

      resolve(valid);
    }, 4000);
  });
};

calcula(10, 20);
