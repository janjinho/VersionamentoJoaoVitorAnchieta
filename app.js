document.getElementById('add-task').addEventListener('click', function() {
   
    const task = document.getElementById('task-input').value;
    const time = document.getElementById('time-select').value;

    document.getElementById('task-input').value = '';
  
    if (time === 'manhã') {
      document.getElementById('morning-tasks').innerHTML += `<li>${task}</li>`;
    } else if (time === 'tarde') {
      document.getElementById('afternoon-tasks').innerHTML += `<li>${task}</li>`;
    } else if (time === 'noite') {
      document.getElementById('night-tasks').innerHTML += `<li>${task}</li>`;
    }
  });
  