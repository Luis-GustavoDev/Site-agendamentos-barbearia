import styled from "styled-components";

const Container = styled.section`
    width: 100%;
    display: flex;
    gap: 20px;
    margin: 20px 0;
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
    align-items: center;
    justify-content: space-around;
    gap: 20px;
    font-size: 25px;
    line-height: 30px;
`

const PostLine = ({ post, onCorteSelecionado }) => {

    return (
        <Container onClick={() => onCorteSelecionado(post)}>
            <Post>
                <Imagem src={`assets/posts/${post.id}/capa.png`}/>
                <Descricao>
                    <div>{post.titulo}</div>
                    <div>{post.tempo}</div>
                    <div>{post.preco}</div>
                </Descricao>
            </Post>
        </Container>
    )
}

export default PostLine