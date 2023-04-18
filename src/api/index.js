import axios from "axios";

export const getUsers = () => axios.get('http://localhost:4444/users')

export const createUser = (name) => axios.post('http://localhost:4444/users', {name})