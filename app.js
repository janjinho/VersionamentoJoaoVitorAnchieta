// Função para exibir o nome do usuário na rotina
function displayUserName() {
  const params = new URLSearchParams(window.location.search);
  const userName = params.get('name');
  if (userName) {
      document.getElementById('routine-title').textContent = `${userName}'s Routine`;
  }
}

// Função para alternar o modo escuro
function toggleDarkMode() {
  const body = document.body;
  body.classList.toggle('dark-mode');

  // Salva a preferência do usuário no localStorage
  const isDarkMode = body.classList.contains('dark-mode');
  localStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled');
}

// Função para aplicar a preferência de modo escuro armazenada no localStorage
function applyDarkModePreference() {
  const darkModePreference = localStorage.getItem('darkMode');
  if (darkModePreference === 'enabled') {
      document.body.classList.add('dark-mode');
  }
}

// Função para adicionar tarefas
function addTask() {
  const taskInput = document.getElementById('task-input');
  const task = taskInput.value.trim();
  const time = document.getElementById('time-select').value;
  const category = document.getElementById('category-select').value;

  if (task === '') return;

  taskInput.value = ''; // Limpa o campo de texto

  let taskList;
  if (time === 'manhã') {
      taskList = document.getElementById('morning-tasks');
  } else if (time === 'tarde') {
      taskList = document.getElementById('afternoon-tasks');
  } else if (time === 'noite') {
      taskList = document.getElementById('night-tasks');
  }

  const listItem = document.createElement('li');
  listItem.textContent = task;
  listItem.classList.add(category);

  // Função para remover tarefa ao clicar
  listItem.addEventListener('click', function () {
      this.remove();
  });

  taskList.appendChild(listItem);
}

// Função para aplicar as cores das opções no select de categorias
function applyCategoryColors() {
  const categorySelect = document.getElementById('category-select');
  const initialOption = categorySelect.options[categorySelect.selectedIndex];
  const initialColor = initialOption.getAttribute('data-color');
  categorySelect.style.backgroundColor = initialColor;

  categorySelect.addEventListener('change', function () {
      const selectedOption = categorySelect.options[categorySelect.selectedIndex];
      const selectedColor = selectedOption.getAttribute('data-color');
      categorySelect.style.backgroundColor = selectedColor;
  });

  categorySelect.addEventListener('mouseover', function () {
      const options = categorySelect.options;
      for (let i = 0; i < options.length; i++) {
          const option = options[i];
          const color = option.getAttribute('data-color');
          option.style.backgroundColor = color;
      }
  });
}

// Função para filtrar as tarefas por categoria
function filterTasks() {
  const filterSelect = document.getElementById('filter-category-select');
  const selectedCategory = filterSelect.value;
  const allTasks = document.querySelectorAll('ul li');

  allTasks.forEach(task => {
      if (selectedCategory === 'todas' || task.classList.contains(selectedCategory)) {
          task.style.display = '';
      } else {
          task.style.display = 'none';
      }
  });
}

// Evento de filtro de categorias
document.getElementById('filter-category-select').addEventListener('change', filterTasks);

// Carregar preferências e adicionar eventos quando a página for carregada
window.addEventListener('load', function () {
  displayUserName();
  applyDarkModePreference();
  applyCategoryColors();
  filterTasks();

  document.getElementById('add-task').addEventListener('click', addTask);
  document.getElementById('task-input').addEventListener('keypress', function (event) {
      if (event.key === 'Enter') {
          event.preventDefault();
          addTask();
      }
  });

  const darkModeToggle = document.getElementById('dark-mode-toggle');
  darkModeToggle.addEventListener('click', toggleDarkMode);
});
