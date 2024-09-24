
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
  const time = document.getElementById('time-select').value;
  const category = document.getElementById('category-select').value;

  if (task === '') return;

  document.getElementById('task-input').value = '';

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
function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');

  const isDarkMode = document.body.classList.contains('dark-mode');
  const button = document.getElementById('dark-mode-toggle');
  if (isDarkMode) {
    button.textContent = '☀️';
  } else {
    button.textContent = '🌙';
  }
}

document.getElementById('dark-mode-toggle').addEventListener('click', toggleDarkMode);