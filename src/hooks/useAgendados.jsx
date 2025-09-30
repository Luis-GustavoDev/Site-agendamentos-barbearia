import { AgendadosContext } from "context/Agendados/AgendadosProvider"
import { useContext } from "react"

export const useAgendados = () => {
    const { agendados, setAgendados } = useContext(AgendadosContext)

    function submeterFormulario(e) {
        e.preventDefault()
    }

    function resgatarInformacao(e) {
        console.log(e.target.value)
    }

    function marcarHorario(novoCliente) {

        let novaLista = [...agendados]
        novaLista.push(novoCliente)

        {
            novaLista.map(a => {
                delete a.tempo
                delete a.preco
            })
        }

        return setAgendados(novaLista)
    }

    return {
        agendados,
        submeterFormulario,
        marcarHorario,
        resgatarInformacao
    }
}