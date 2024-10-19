let msg;
let x;
let task = "";
const tasks = [];
function toggle(tasks, x) {
    if (tasks[x]) {
        tasks[x] = tasks[x].includes('not completed') 
            ? tasks[x].replace('not completed', 'completed') 
            : tasks[x].replace('completed', 'not completed');
    } else {
        console.log("Invalid task number");
    }
}

do {
    msg = prompt("Enter number pleas \n1. Add task\n2.View tasks\n3.Toggle a task\n4.edit tasks\n5.Delete a task\n6.Search\n7.Exit")
    console.log(msg);
    switch (msg) {
        case ('1'):
            x = prompt("Enter the the task")
            let task = x + " [not completed]";
            tasks.push(task)
            console.log("Task added")
            break;
        case('2'):
            let i = 1,result ='';
            tasks.forEach(x => result+=(` ${i++}- ${x}\n`)) // tasks.forEach((x, index) => result += (`${index + 1}- ${x}\n`));
            prompt(result)
            break;
        case ('3'):
            if (x < 0 & x > tasks.length) {
                console.log("not valid")
            }
            else{
                let x=0;
                x = parseInt(prompt("Enter the number of the task to toggle"))
                toggle(tasks,--x)
                console.log('toggle done')
            }
            break;
        case ('4'):
            x = parseInt(prompt("Enter the number of the task to edit"))
            if (x < 0 & x > tasks.length) {
                console.log("not valid")
            } else {
                x--;
                let y = prompt("Enter the the edition")
                tasks[x] = y + (tasks[x].slice(-14)=='not completed]'? ' not completed':' completed');            }
            break;
        case ('5'):
            x = prompt("Enter the number of the task to delete")
            if (x < 0 & x > tasks.length) {
                console.log("not valid")
            } else {
                tasks.splice(--x, 1);
                console.log(`taske ${++x} deleted`);
            }
            break;
        case ('6'):
            x = prompt("Enter the sentence to search")
            if (x < 0 & x > tasks.length) {
                console.log("not valid")
            } else {
                let resOfSearch = '';
                tasks.forEach((task, index) => task.includes(x)? resOfSearch += `${++index}. ${task}\n`: 'Not founded');             
                console.log(resOfSearch);
            }
            break;
        case ('7'):
            break;
        default:
            console.log("inavlid number")
            break;
    }
    console.log(tasks)
} while (msg != 7)
