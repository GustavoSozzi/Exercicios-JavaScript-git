const Obter_dados = () => {
    const nome = document.getElementById('nomeid')
    const idade = document.getElementById('idadeid')
    const cpf = document.getElementById('cpfid')

    const nome_value = nome.value
    const idade_value = idade.value
    const cpf_value = cpf.value

    const dadosexibidos = document.getElementById('mostra_resultados')

    if(!nome_value){alert('campo nome nao preenchido')}
    else if(!idade_value){alert('campo idade nao preenchido')}
    else if(!cpf_value){alert('campo cpf nao preenchido')}
    else{
        dadosexibidos.innerHTML += `
        <p>Nome: ${nome_value}</p>
        <p>Idade: ${idade_value}</p>
        <p>CPF: ${cpf_value}</p>
    `;
    
        alert('dados enviados com sucesso')
    }
}


class valida_Cpf{
    constructor(nome, idade, cpf){
        this.nome = nome;
        this.idade = idade;
        this.cpf = cpf;
    }

    falar(){
        console.log(`\nOla ${this.nome} esta falandoo`)
    }
}

/*function pessoa(nome, idade){
    this.nome=nome;
    this.idade = idade
}

pessoa.prototype.falar = function(){
    console.log(`Pessoa ${this.nome} esta falando`)
}

const p1 = new pessoa('gustavo sozzi bom', 19)*/