var todos = ["Update HTML Document"];
window.setTimeout(function() {
// put all the rest of your JS code from the lecture here
// prompt user with "What would you like to do?"
var input = prompt("What would you like to do?");

while(input !== "quit") {
    //handle input
    if(input === "list") {
      listTodos();
    } else if(input === "new") {
      addTodo();
    } else if(input === "delete") {
      deleteTodo();
    }
    //ask again for new input
    input = prompt("What would you like to do?");
}
console.log("OK, YOU QUIT THE APP");

function listTodos() {
  todos.forEach(function(listItem, listIndex) {
    console.log("**********");
    console.log(listIndex + ": " + listItem);
  });
    console.log("**********");
}

function addTodo() {
  var newTodo = prompt("Enter a new todo");
    todos.push(newTodo);
    console.log("Added Todo");
}

function deleteTodo() {
  //ask for index of todo to be deleted
  var index = prompt("Enter index of todo to delete");
  //delete that todo
  //splice()
  todos.splice(index,1);
  console.log("Deleted Todo");
}


}, 500);