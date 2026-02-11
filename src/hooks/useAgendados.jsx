import { registrarClientes, resgatarClientes } from "api"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export const useAgendados = () => {

    const navegar = useNavigate()

    const [agendados, setAgendados] = useState([])

    const [form, setForm] = useState(({
        id: Number,
        nome: "",
        horario: null,
        data: Date()
    }))

    const aoDigitarCampoDoFormulario = (campo, valor) => {
        setForm((prev) => ({ ...prev, [campo]: valor }))
    }

    const submeterFormulario = (e) => {
        e.preventDefault()
        navegar("/agendados")
    }

    const marcarHorario = (cliente, idCorte) => {
        const novoCliente = ({
            ...cliente,
            id: idCorte
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

    useEffect( () => {
        carregarDados()
    }, [])

    return {
        agendados,
        form,
        submeterFormulario,
        marcarHorario,
        aoDigitarCampoDoFormulario
    }
}