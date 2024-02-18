
function addTodo() {
  let todoTitle = document.getElementById('input').value;
  let todoList = document.getElementById('list');

  let p = document.createElement('p');
  p.innerHTML = todoTitle;
  todoList.appendChild(p)
}