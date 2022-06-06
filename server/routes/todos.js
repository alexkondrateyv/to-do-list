const {getTodos, addTodo, deleteTodo, updateTodo} = require('../controllers/todos')

const Item = {
    type: 'object',
    properties: {
        id: {type: 'string'},
        completed: {type: 'boolean'},
        value: {type: 'string'}
    }
}
const getTodosOpts = {
    schema: {
        response: {
            200: {
                type: 'array',
                items: Item
            }
        }
    },
    handler: getTodos
}
const postTodoOpts = {
    schema: {
        response: {
            201: Item
        }
    },
    handler: addTodo
}
const deleteTodoOpts = {
    schema: {
        response: {
            200: {
                type: 'object',
                properties: {
                    message: {
                        type: 'string'
                    }
                }
            }
        }
    },
    handler: deleteTodo
}
const updateTodoOpts = {
    schema: {
        response: {
            200: Item
        }
    },
    handler: updateTodo
}

function todoRoutes(fastify, options, done) {

    // GET
    fastify.get('/todos', getTodosOpts)

    // POST
    fastify.post('/todos', postTodoOpts)

    // DELETE
    fastify.delete('/todos/:id', deleteTodoOpts)

    // UPDATE
    fastify.put('/todos/:id', updateTodoOpts)

    done()
}

module.exports = todoRoutes