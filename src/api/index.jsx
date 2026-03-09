import axios from 'axios'

const api = axios.create({
  baseURL: "http://localhost:3001"
})

export const resgatarCortes = async () => {
  const { data } = await api.get("/cortes")
  return data
}

export const registrarClientes = async (cliente) => {
  const { data } = await api.post("/clientes", cliente)
  return data
}

export const resgatarClientes = async () => {
  const { data } = await api.get("/clientes")
  return data
}

export const removerCliente = async (cliente) => {
  const { data } = await api.delete(`clientes/${cliente}`)
  return data
}

export const resgatarHorarios = async () => {
  const { data } = await api.get("/agenda")
  return data
}