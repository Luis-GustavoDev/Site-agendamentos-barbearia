import { CardPost, Post } from "components/CortesPosts"
import PostLine from "components/Post_line/Index"
import Rodape from "components/Rodape/Index"
import { useAgendados } from "hooks/useAgendados"
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
                {agendados.map(info => (
                    <CardPost key={info.id}>
                        <PostLine post={info} />
                    </CardPost>
                ))}
            </Post>
            <Rodape />
        </Geral>
    )
}

export default Agendados