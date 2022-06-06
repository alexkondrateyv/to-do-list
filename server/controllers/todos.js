const {v4: uuidv4} = require("uuid");
let todos = require("../todos");

const getTodos = (req, res) => {
    res.send(todos)
}
const addTodo = (req, res) => {
    const {completed, value} = req.body
    const todo = {
        id: uuidv4(),
        completed,
        value,
    }

    todos = [...todos, todo]

    res.code(201).send(todo)
}
const deleteTodo = (req, res) => {
    const {id} = req.params
    todos = todos.filter(item => item.id !== id)
    res.send({message: `Item ${id} has been removed`})
}
const updateTodo = (req, res) => {
    const {completed} = req.body;
    const {id} = req.params;

    const todo = todos.filter((todo) => {
        return todo.id === id;
    })[0];

    if (!todo) {
        return res.status(404).send(new Error(`Unvalid id - ${id}`));
    }

    todo.completed = completed;

    return res.send(todo);
};

module.exports = {
    getTodos,
    addTodo,
    deleteTodo,
    updateTodo
}