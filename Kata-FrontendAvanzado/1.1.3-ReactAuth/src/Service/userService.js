
//* 1) Import Axios
import axios from 'axios'

//* 2) Establecemos nuestro endpoint
//* -> SNAKE_CASE para entornos 

const BASE_URL = 'http://localhost:3000'

//* 3) Ocupo mandar informacion
// Registrar un usuario
const registerUserService = (data) => axios.post(`${BASE_URL}/register`, data)

// Autenticar un usuario
const loginUserService = (data) => axios.post(`${BASE_URL}/login`, data)

export{
    registerUserService,
    loginUserService
}