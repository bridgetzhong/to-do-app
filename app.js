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

    // set the input's type to checkbox
    checkbox.type = "checkbox";

    // set the title
    newLi.textContent = title;

    // attach the checkbox to the li
    newLi.appendChild(checkbox);

    // attach the delete button to the li next to checkbox?
    //add javascript


    // attach the li to the ul
    toDoList.appendChild(newLi);

    // empty the input
    newToDoText.value='';
  });
}


window.onload = function () {
  onReady()
};


function deletebtn () {
  ////define delete button somehow (const button =)
  const li = e.targetparentElement; //not sure what this means, saw this on a video
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

  button.addEventListener('delete', event => {
    event.preventDefault();

    //delete from toDoList
    li.parentNode.removeChild('li');
  });
}

//dont know what to name the below 'xxxxx'
window.onload = function () {
  deletebtn()
};
