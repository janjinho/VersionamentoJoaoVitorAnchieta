
function addTask() {
    const task = document.getElementById('task-input').value.trim(); 
    const time = document.getElementById('time-select').value;
 
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

   function getQueryParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
  }

  const userName = getQueryParameter('name');

  if (userName) {
    document.getElementById('routine-title').textContent = `${userName}'s Routine`;
  }

  function addTask() {
    const task = document.getElementById('task-input').value.trim(); 
    const time = document.getElementById('time-select').value;

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