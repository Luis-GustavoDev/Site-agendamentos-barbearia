import { AgendadosContext } from "context/Agendados/AgendadosProvider"
import { useContext, useState } from "react"

export const useAgendados = () => { 

    const { agendados, setAgendados } = useContext(AgendadosContext)
    const [ nome, setNome ] = useState("")
    const [ horario, setHorario ] = useState(null)
    const [ data, setData ] = useState(Date());

    function submeterFormulario(e) {
        e.preventDefault()
    }

    function marcarHorario(novoCliente) {

        let novaLista = [...agendados]
        novaLista.push(novoCliente)

        atualizarAgenda(novaLista)

        return setAgendados(novaLista)
    }

    function atualizarAgenda(novaLista) {
        return novaLista.map(a => {
            a.titulo = nome.toLowerCase()
            a.tempo = horario
            a.preco = data
        })
    }

    return {
        agendados,
        submeterFormulario,
        marcarHorario,
        nome,
        setNome,
        horario,
        setHorario,
        data,
        setData
    }
}