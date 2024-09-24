
function displayUserName() {
  const params = new URLSearchParams(window.location.search);
  const userName = params.get('name');
  if (userName) {
    document.getElementById('routine-title').textContent = `${userName}'s Routine`;
  }
}

window.addEventListener('load', function() {
  displayUserName();

  const categorySelect = document.getElementById('category-select');
  const initialOption = categorySelect.options[categorySelect.selectedIndex];
  const initialColor = initialOption.getAttribute('data-color');
  categorySelect.style.backgroundColor = initialColor;
});

function addTask() {
  const task = document.getElementById('task-input').value.trim(); 
  const time = document.getElementById('time-select').value;  // Agora usa dias da semana
  const category = document.getElementById('category-select').value;

  if (task === '') return;

  document.getElementById('task-input').value = '';

  let taskList;
  switch(time) {
    case 'segunda':
      taskList = document.getElementById('monday-tasks');
      break;
    case 'terça':
      taskList = document.getElementById('tuesday-tasks');
      break;
    case 'quarta':
      taskList = document.getElementById('wednesday-tasks');
      break;
    case 'quinta':
      taskList = document.getElementById('thursday-tasks');
      break;
    case 'sexta':
      taskList = document.getElementById('friday-tasks');
      break;
    case 'sábado':
      taskList = document.getElementById('saturday-tasks');
      break;
    case 'domingo':
      taskList = document.getElementById('sunday-tasks');
      break;
  }

  const listItem = document.createElement('li');
  listItem.textContent = task;
  listItem.classList.add(category);

  listItem.addEventListener('click', function() {
    this.remove();
  });

  taskList.appendChild(listItem);
}

document.getElementById('add-task').addEventListener('click', addTask);
document.getElementById('task-input').addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    event.preventDefault();
    addTask();
  }
});

const categorySelect = document.getElementById('category-select');

categorySelect.addEventListener('mouseover', function() {
  const options = categorySelect.options;
  for (let i = 0; i < options.length; i++) {
    options[i].addEventListener('mouseenter', function() {
      const hoverColor = options[i].getAttribute('data-color');
      categorySelect.style.backgroundColor = hoverColor;
    });
  }
});

categorySelect.addEventListener('mouseleave', function() {
  const selectedOption = categorySelect.options[categorySelect.selectedIndex];
  const selectedColor = selectedOption.getAttribute('data-color');
  categorySelect.style.backgroundColor = selectedColor;
});
