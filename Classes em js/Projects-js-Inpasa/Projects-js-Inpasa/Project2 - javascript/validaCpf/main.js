
function enviar(){
    const nome = document.getElementById("nomeid");
    const idade = document.getElementById("idadeid");
    const email = document.getElementById("emailid");
    const cpf = document.getElementById("cpfid");

    const { value: nome_value } = nome;
    const { value: idade_value } = idade;
    const { value: email_value } = email;
    const { value: cpf_value } = cpf;


    if(nome_value!="" && idade_value!="" && email_value!="" && cpf_value!=""){
        const validate = valida_informações(nome_value, idade_value, email_value, cpf_value)
        if(validade){
            alert('Obrigado sr(a) ' + nome.value + ' os seus dados foram enviados')
            const dados_guardados = guarda_dados(nome_value, idade_value, email_value, cpf_value)
        }
        console.log(dados_guardados)
    }

    const form = document.getElementById('form')

    form.addEventListener('submit', function(e){
        alert(nome.value)

        e.preventDefault()
    })

}

const valida_informações = (nome, email, cpf) => {

    const isValidNameResult = isValidName(nome)// ? null : alert('Nome inválido. Insira novamente.');
    const isValidEmailResult =isValidEmail(email)// ? null : alert('E-mail inválido. Insira corretamente.');
    const isValidCpfResult =isvalidCpf(cpf) //? null : alert('Cpf invalido. insira corretamente')

    if (!isValidNameResult) {alert('Nome inválido. Insira novamente.');}
    if (!isValidEmailResult) {alert('E-mail inválido. Insira corretamente.');}
    if (!isValidCpfResult) {alert('CPF inválido. Insira corretamente.');}


    return isValidNameResult && isValidEmailResult && isValidCpfResult

}


const isValidName = (name) => /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/.test(name)

const isValidEmail = (email) => /\S+@\S+\.\S+/.teste(email)

const  isValidCpF = (CPF) => {
    var soma = 0;
    var resto;
    var CPF = document.getElementById('cpf').value;

    if(CPF == '00000000000') return false;
    for(i=1; i<=9; i++) soma = soma + parseInt(CPF.substring(i-1, i)) * (11 - i);
    resto = (soma * 10) % 11;

    if((resto == 10) || (resto == 11)) resto = 0;
    if(resto != parseInt(CPF.substring(9, 10))) return false;

    soma = 0;
    for(i = 1; i <= 10; i++) soma = soma + parseInt(CPF.substring(i-1, i))*(12-i);
    resto = (soma * 10) % 11;

    if((resto == 10) || (resto == 11)) resto = 0;
    if(resto != parseInt(CPF.substring(10, 11))) return false;
    return true;
}


const guarda_dados = (nome, idade, email, cpf) => {
    let dados = []
    dados.push(nome, idade, email, cpf)
    return dados;
}