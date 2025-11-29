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
const Descricao = styled.h2`
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: space-around;
    gap: 20px;
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
const Button = styled.button`
    display: flex;
    align-items: center;
    background-color: var(--azul-medio);
    color: var(--branco);
    border-radius: 16px;
    border: none;
    padding: 0 20px;
    font-size: 25px;
    height: 50px;
    cursor: pointer;

    @media (max-width: 870px) {
        font-size: 20px;
        padding: 0 15px;
    }
    @media (max-width: 730px) {
        display: none;
    }
`

const PostLine = ({ post, onCorteSelecionado }) => {

    return (
        <Container onClick={() => onCorteSelecionado(post)}>
            <Post>
                <Imagem src={`assets/posts/${post.id}/capa.png`} />
                <Descricao>
                    <div>{post.titulo}</div>
                    <div>{post.tempo}</div>
                    <div>{post.preco}</div>
                    <Button>reservar</Button>
                </Descricao>
            </Post>
        </Container>
    )
}

export default PostLine