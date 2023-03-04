const frutas = ['Laranja', 'Banana', 'Uva']

let [fruta1, , fruta3] = frutas
console.log(fruta1)
console.log(fruta3)

const pessoa = {
    nome: 'Cristopher',
    idade: 20,
    pais: 'Brasil',
    idioma: 'Português'
}
const localidade = ({pais,idioma}) => `Você mora no ${pais} e fala ${idioma}`
console.log(localidade(pessoa))