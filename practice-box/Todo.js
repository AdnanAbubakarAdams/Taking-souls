// TODO LIST 
// * NEW = add a todo
// * list = list all todos
// * delete = remove a specific todo
// * quit = quit app

let userInput = prompt("what would you like to do?")
// Storing todo in an array 
const todos = ["Get Food", "Pray", "Keep Coding"]
while (userInput !== "quit" && userInput !== "q") {
    if (userInput === "list") {
        console.log("**************")
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`);
        }
        console.log("***********");
        // createing a new todo
    } else if (userInput === "new") {
        const newTodo = prompt("Ok, what is the new todo");
        todos.push(newTodo);
        console.log(`${newTodo} added to the list!`)
    } else if (userInput === "delete") {
        const index = parseInt(prompt("ok, enter an index to delete:"))
        // const index = parseInt(indexStr)
        if (!Number.isNaN(index)) {
            const deleted = todos.splice(index, 1);
        console.log(`Ok, deleted ${deleted[0]}`)
        } else {
            console.log("unknown index")
        }
    }
    userInput = prompt("what would you like to do?")
}
console.log("OK QUIT THE APP!")