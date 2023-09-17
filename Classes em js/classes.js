class Valida_cpf {
    constructor(cpfEnviado){
        Object.defineProperty(this, 'cpfLimpo', {
            writable: false,
            enumerable: true,
            configurable: false,
            value: cpfEnviado.replace(/\D+/g, '')
        })
    }

    get eSequencia(){
        return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo
    }

    geraNovoCpf(){
        const cpfSemDigitos = this.cpfLimpo.slice(0, -2)
        const digito1 = Valida_cpf.geraDigito(cpfSemDigitos)
        const digito2 = Valida_cpf.geraDigito(cpfSemDigitos + digito1)
        this.novoCpf = cpfSemDigitos + digito1 + digito2 //adicionando objetos dinamicamente
    }

    criaDigito(cpf_parcial){
        const cpf_array = array.from(this.cpf_parcial)

        let regressivo = cpfArray.length + 1
        const total = cpfArray.reduce((ac, val) => {
            ac += (regressivo * Number(val))
            regressivo
            return ac
        }, 0)
    
        const digito = 11 - (total % 11)
        return digito > 9 ? '0': String(digito)
    }

    isSequencia(){
        const sEquencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length)
        return sequencia === this.cpfLimpo;
    }
}

const cpf = new Valida_cpf('078.156.371-24')

if(cpf.valida){console.log('cpf_invalido')}
else{console.log('cpf invalido')}
