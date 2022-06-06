const {v4: uuidv4} = require("uuid");

let todos = [
    {
        id: uuidv4(),
        completed: true,
        value: 'Complete client part'
    },
    {
        id: uuidv4(),
        completed: false,
        value: 'Complete server part'
    },
    {
        id: uuidv4(),
        completed: false,
        value: 'Get a job at Nitrix'
    }
]

module.exports = todos