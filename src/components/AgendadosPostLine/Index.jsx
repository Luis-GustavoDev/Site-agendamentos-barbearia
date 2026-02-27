import { useAgendados } from "context/HookAgendados/useAgendados";
import styled from "styled-components";

const Container = styled.section`
    width: 100%;
`
const Post = styled.div`
    display: grid;
    grid-template-columns: 12% auto;
    width: 100%;
    box-shadow: 1px 1px 15px rgba(0, 0, 0, 0.2);
    border-radius: 16px;
    cursor: pointer;
`
const Imagem = styled.img`
    max-width: 100%;
    border-radius: 16px 0 0 16px;
    object-fit: cover;
`
const Descricao = styled.h3`
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: space-around;
    font-size: 40px;
    color: var(--cor-fonte-principal);
    
    @media (max-width: 1285px){
        font-size: 35px;
    }

    @media (max-width: 1044px) {
        line-height: 20px;
        font-size: 1.5rem;
    }
`
const formataData = (data) => {
    const [ano, mes, dia] = data.split("-")
    return `${dia}/${mes}/${ano}`
}

const AgendadosPostLine = ({ post }) => {

    const { removerDados } = useAgendados()

    return (
        <Container>
            <Post>
                <Imagem src={`assets/posts/${post.id}/capa.png`} />
                <Descricao>
                    <div>{post.nome}</div>
                    <div>{post.horario + "h"}</div>
                    <div>{formataData(post.data)}</div>
                    <i className="far fa-times-circle" onClick={() => removerDados(post.id)} />
                </Descricao>
            </Post>
        </Container>
    )
}

export default AgendadosPostLine