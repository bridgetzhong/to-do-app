function onReady() {
  const toDos = [];
  const addToDoForm = document.getElementById('addToDoForm');

  function createNewToDo() {
    const newToDoText = document.getElementById('newToDoText');
    if (!newToDoText.value) { return; }

    toDos.push ({
      title: newToDoText.value,
      complete: false
    });
    newToDoText.value = '';

    renderTheUI(toDos);
  }

  function removeToDoItem(index) {
    console.log(toDos);
    toDos.splice(index,1);
    console.log(toDos);
    renderTheUI(toDos);
  }

  function renderTheUI(toDos) {
    const toDoList = document.getElementById('toDoList');

    toDoList.textContent = '';

    toDos.forEach(function(toDo, index) {
      const newLi = document.createElement('li');
      newLi.setAttribute('id', 'myLi');
      const checkbox = document.createElement('input');

      const removeToDo = document.createElement('input');
      removeToDo.setAttribute('type', 'button');
      removeToDo.setAttribute('value', 'remove');
      removeToDo.setAttribute('id', 'removeButton');
      removeToDo.setAttribute('class', 'removeButton');
      removeToDo.setAttribute('data-index', index);

      checkbox.type = "checkbox";

      newLi.textContent = toDo.title;

      toDoList.appendChild(newLi);
      newLi.appendChild(removeToDo);

      removeToDo.addEventListener('click', function(event) {
        removeToDoItem(index);
      });
    });
  }

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    createNewToDo();
  });


  renderTheUI(toDos);
}

window.onload = function() {
  onReady();
};
