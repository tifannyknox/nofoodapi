var pessoa = {};
pessoa.Nome = "Danubia";
pessoa.sobreNome = "Barreto";
 
function imprimirPessoa() {
    return `${pessoa.Nome} ${pessoa.sobreNome}.`;
}

console.log(imprimirPessoa());