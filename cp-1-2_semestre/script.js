// Array de salários
const salarios = [1500, 2200, 1800, 2500, 1900, 2100, 2300, 1700, 2800, 2000];

// Função para calcular o novo salário com base nas condições
function calcularNovoSalario(salario) {
  if (salario <= 2000) {
    return salario * 1.15; // Aumento de 15% para salários até 2000
  } else {
    return salario * 1.1; // Aumento de 10% para salários acima de 2000
  }
}

// Utilizando o método map() para aplicar o aumento a cada salário
const novosSalarios = salarios.map(calcularNovoSalario);

// Exibindo os salários antigos e novos lado a lado
for (let i = 0; i < salarios.length; i++) {
  // Imprime os valores antigos e novos salários no console
  console.log(`Salário antigo: ${salarios[i]} - Novo salário: ${novosSalarios[i]}`);
}
// Isso imprime no console os valores antigos e novos salários 
// correspondentes aos índices atuais i nos arrays salarios
// e novosSalarios. A interpolação ${salarios[i]} obtém o 
// valor do array salarios no índice i, e ${novosSalarios[i]} 
// obtém o valor do array novosSalarios no mesmo índice i.

// Criando um novo array com salários superiores a 2500 usando o método filter()
const salariosSuperiores2500 = novosSalarios.filter(salario => salario > 2500);

// Exibindo os salários superiores a 2500
console.log(`Os salários superiores a 2500 são: ${salariosSuperiores2500}`);

// Usando o método reduce() para somar os valores do array
const somaSalarios = salariosSuperiores2500.reduce((total, salario) => total + salario, 0);

// Exibindo a soma dos salários superiores a 2500
console.log(`A soma dos salários superiores a 2500 é: ${somaSalarios}`);
