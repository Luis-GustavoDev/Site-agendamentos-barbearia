import { registrarClientes, removerCliente, resgatarClientes } from "api"
import { useEffect, useState } from "react"

export const useAgendados = () => {

    const [agendados, setAgendados] = useState([])
    const [submitado, setSubmitado] = useState(null)

    const [form, setForm] = useState(({
        id: Number,
        nome: "",
        horario: null,
        data: null
    }))

    const aoDigitarCampoDoFormulario = (campo, valor) => {
        setForm((prev) => ({ ...prev, [campo]: valor }))
    }

    const submeterFormulario = (e) => {
        e.preventDefault()

        setSubmitado(true)
    }

    const marcarHorario = (cliente, idCorte) => {
        const novoCliente = ({
            ...cliente,
            idCorte: idCorte
        })
        registrarClientes(novoCliente)
    }

    const carregarDados = async () => {
        try {
            const verificar = await resgatarClientes()
            setAgendados(verificar)
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

    return {
        agendados,
        form,
        submeterFormulario,
        marcarHorario,
        removerDados,
        aoDigitarCampoDoFormulario,
        submitado
    }
}