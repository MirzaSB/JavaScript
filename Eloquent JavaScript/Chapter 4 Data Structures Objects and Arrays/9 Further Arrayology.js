var todoList = [];

function rememberTo(task) {
    todoList.push(task);
}

function whatIsNext() {
    return todoList.shift();
}

function urgentlyRemeberTo(task) {
    todoList.unshift(task);
}

//Index of
console.log([1, 2, 3, 2, 1].indexOf(3));

//Last Index of
console.log([1, 2, 3, 2, 1].lastIndexOf(2));

var arr = [0,1,2,3,4];

//Array slice
console.log(arr.slice(2,4));
console.log(arr.slice(2));

function remove(array, index) {
    return array.slice(0, index).concat(array.slice(index + 1));
}

console.log(remove(["a", "b", "c", "d", "e"], 2));

