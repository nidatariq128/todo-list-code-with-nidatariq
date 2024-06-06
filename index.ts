
import inquirer from "inquirer";
import chalk from "chalk"

let todos : string[] = [];
let condition = true;

console.log(chalk.magenta.bold("\n\t ****************** Welcome to code with Nida Tariq - TOdo-List Application ***********\n"));


while(condition){
let ans = await inquirer.prompt(
    [
        {
            name: "select",
            type: "list",
            message: chalk.green("select an operation?"),
            choices: ["Add","Update","Viwe","delete","Exit"],
        },
    ]
);
if(ans.select === "Add"){
let addTodo = await inquirer.prompt({
    name: "todo",
    type: "input",
    message: chalk.yellow("Add items in the list"), 
    validate: function (input){
        if(input.trim() == ""){
            return "pleace enter a non-empty item."
            
        }
        return true;
    }
})
if(addTodo.todo.trim() !== ""){
todos.push(addTodo.todo);
todos.forEach(todo => console.log(todo)
)
}
}
if(ans.select === "Update"){
let UpdateTodo = await inquirer.prompt({
    name:"todo",
    type: "list",
    message: chalk.yellowBright("update items in the list"),
    choices: todos.map(item => item)
})
let addTodo = await inquirer.prompt({
    name: "todo",
    type: "input",
    message: chalk.grey("Add items in the list"), 
})
let newTodo = todos.filter(val => val !== UpdateTodo.todo);
todos = [...newTodo,addTodo.todo];
todos.forEach(todo => console.log(todo)
)
}

if(ans.select === "Viwe"){
console.log("*****TO-DO LIST*****");
todos.forEach(todo => console.log(todo)
)
}

if(ans.select === "delete"){
 let deleteTodo = await inquirer.prompt({
        name:"todo",
        type: "list",
        message: chalk.red("select items to delete!"),
        choices: todos.map(item => item)
  })
 let newTodo = todos.filter(val => val !== deleteTodo.todo);
todos = [...newTodo];
todos.forEach(todo => console.log(todo)
);
}

if(ans.select === "Exit"){
    console.log("Exiting progam...");
    condition = false;
}
}