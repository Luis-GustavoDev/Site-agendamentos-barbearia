import { registrarClientes, removerCliente, resgatarClientes, resgatarHorarios } from "api"
import { useEffect, useState } from "react"

export const useAgendados = () => {

    const [agendados, setAgendados] = useState([])
    const [horarios, setHorarios] = useState([])
    const [submitado, setSubmitado] = useState(null)

    const [form, setForm] = useState(({
        id: Number,
        nome: "",
        horario: "",
        data: ""
    }))

    const aoDigitarCampoDoFormulario = (campo, valor) => {
        setForm((prev) => ({ ...prev, [campo]: valor }))
    }

    const submeterFormulario = (e) => {
        e.preventDefault()

        setSubmitado(true)
    }

    const marcarHorario = (cliente, idCorte) => {
        try {
            const novoCliente = ({
                ...cliente,
                idCorte: idCorte
            })
            registrarClientes(novoCliente)
        } catch (error) {
            console.log(error)
        }
    }

    const carregarDados = async () => {
        try {
            const verificar = await resgatarClientes()
            setAgendados(verificar)
        } catch (error) {
            console.log(error)
        }
    }

    const carregarHorarios = async () => {
        try {
            const res = await resgatarHorarios()
            setHorarios(res.horarios)
        } catch (error) {
            console.log(error)
        }
    }

    const removerDados = async (cliente) => {
        try {
            removerCliente(cliente)
        }
        catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        carregarDados()
    }, [agendados])

    useEffect(() => {
        carregarHorarios()
    }, [])

    return {
        agendados,
        form,
        submitado,
        horarios,
        submeterFormulario,
        marcarHorario,
        removerDados,
        aoDigitarCampoDoFormulario,
    }
}