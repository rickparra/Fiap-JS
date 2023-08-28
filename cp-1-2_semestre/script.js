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

  // Criando um novo array com salários superiores a 2500 usando o método filter()
  const salariosSuperiores2500 = novosSalarios.filter(salario => salario > 2500);

  // Exibindo os salários superiores a 2500
  console.log(`Os salários superiores a 2500 são: ${salariosSuperiores2500}`);

  // Usando o método reduce() para somar os valores do array
  const somaSalarios = salariosSuperiores2500.reduce((total, salario) => total + salario, 0);

  // Exibindo a soma dos salários superiores a 2500
  console.log(`A soma dos salários superiores a 2500 é: ${somaSalarios}`);
//





//

// Selecionar elementos
const descriptionInput = document.getElementById('task-description');
const authorInput = document.getElementById('task-author');
const departmentInput = document.getElementById('task-department');
const importanceInput = document.getElementById('task-importance');
const paidTaskCheck = document.getElementById('paid-task');
const timedTaskCheck = document.getElementById('timed-task');
const addButton = document.getElementById('add-task-button');
const orderTasksButton = document.getElementById('order-tasks-button');
const importanceList = document.getElementById('importance-list');
const taskTableBody = document.querySelector('#exercicio-2 tbody[tarefas]');

// Eventos
addButton.addEventListener('click', addTask);
orderTasksButton.addEventListener('click', orderTasksByImportance);

// Função para adicionar tarefa
function addTask() {
  const description = descriptionInput.value;
  const author = authorInput.value;
  const department = departmentInput.value;
  const importance = importanceInput.value || null;
  const isPaid = paidTaskCheck.checked;
  const hasDuration = timedTaskCheck.checked;

  const task = {
    description,
    author,
    department,
    importance,
    isPaid,
    hasDuration
  };

  const row = createTaskRow(task);
  taskTableBody.insertAdjacentHTML('beforeend', row);
}

// Função para criar linha da tabela
function createTaskRow(task) {
  const id = `task-${task.id}`; // fazer lógica de id único

  return `
    <tr id="${id}">
      <td>${task.description}</td>
      <td>${task.author}</td>
      <td>${task.department}</td>
      <td>${task.importance}</td>
      <td>${task.isPaid ? 'R$ 99,99' : '-'}</td>
      <td>${task.hasDuration ? '3 dias' : '-'}</td>
      <td><button onclick="deleteTask('${id}')">Excluir</button></td>
    </tr>
  `;
}

// Função para deletar tarefa
function deleteTask(taskId) {
  const taskRow = document.getElementById(taskId);
  if (taskRow) {
    taskRow.remove();
  }
}

// Função para ordenar tarefas por importância
function orderTasksByImportance() {
  const taskRows = Array.from(taskTableBody.querySelectorAll('tr'));
  const sortedTasks = taskRows
    .map(row => {
      return {
        description: row.querySelector('td:first-child').textContent,
        importance: parseInt(row.querySelector('td:nth-child(4)').textContent) || 0
      };
    })
    .sort((taskA, taskB) => taskB.importance - taskA.importance);

  importanceList.innerHTML = '';

  sortedTasks.forEach(task => {
    const listItem = document.createElement('li');
    listItem.textContent = task.description;
    importanceList.appendChild(listItem);
  });
}
