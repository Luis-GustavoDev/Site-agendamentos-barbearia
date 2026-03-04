import AgendadosPostLine from "components/AgendadosPostLine/Index"
import { CardPost, Post } from "components/CortesPosts"
import Rodape from "components/Rodape/Index"
import { useAgendados } from "context/HookAgendados/useAgendados"
import styled from "styled-components"

const Geral = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100vh;
`
const Header = styled.header`
    display: flex;
    justify-content: center;
    max-width: 100%;
    background-color: var(--cor-fonte-principal);
    color: var(--azul-medio);
    padding: 10px;
`

const Agendados = () => {

    const { agendados } = useAgendados()

    return (
        <Geral>
            <Header>
                <h1>Meus agendamentos</h1>
            </Header>
            <Post>
                {!agendados.length ? <h1>Não há cortes agendados para hoje!</h1> : agendados.map(cliente => (
                    <CardPost key={cliente.id}>
                        <AgendadosPostLine post={cliente} />
                    </CardPost>
                ))}
            </Post>
            <Rodape />
        </Geral>
    )
}

export default Agendados