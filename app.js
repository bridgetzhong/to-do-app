function onReady () {
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();

    // get the text
    let title = newToDoText.value;

    // create a new li
    let newLi = document.createElement('li');

    // create a new input
    let checkbox = document.createElement('input');

    // create delete button
    let deleteBtn = document.createElement('button');


    // set the input's type to checkbox
    checkbox.type = "checkbox";

    // set the button
    deleteBtn.innerHTML = "Delete";

    // set the title
    newLi.textContent = title;

    // attach the checkbox to the li
    newLi.appendChild(checkbox);

    // attach the delete button to the li next to checkbox?
    newLi.appendChild(deleteBtn);

    // add delete event listener
    deleteBtn.addEventListener("click", function () {
      Node.removeChild (nextToDoText.value);
    });

    // attach the li to the ul
    toDoList.appendChild(newLi);

    // empty the input
    newToDoText.value='';
  });

}


window.onload = function () {
  onReady()
};
