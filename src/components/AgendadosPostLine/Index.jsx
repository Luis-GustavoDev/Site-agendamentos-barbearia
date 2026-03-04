import { useAgendados } from "context/HookAgendados/useAgendados";
import styled from "styled-components";
import close from "imagens/icons/iconClose.png"

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
const Descricao = styled.div`
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: space-around;
    font-size: 40px;
    color: var(--cor-fonte-principal);

    img {
        width: 40px;
    }
    
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
                <Imagem src={`assets/posts/${post.idCorte}/capa.png`} />
                <Descricao>
                    <h3>{post.nome}</h3>
                    <h3>{post.horario + "h"}</h3>
                    <h3>{formataData(post.data)}</h3>
                    <img src={close} alt="fechar" onClick={() => removerDados(post.id)} />
                </Descricao>
            </Post>
        </Container>
    )
}

export default AgendadosPostLine