import axios from "axios";

const url = 'http://localhost:4000/todos'

export function Get() {
    return axios.get(url)
}

export function Add(todo) {
    axios.post(url, todo)
}

export function Update(id, todo) {
    return axios.put(url + '/' + id, todo)
}

export function Delete(id) {
    return axios.delete(url + '/' + id)
}