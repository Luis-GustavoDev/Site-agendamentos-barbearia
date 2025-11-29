import PostLine from "components/PostLine/Index";
import { PaginaInicialContext } from "context/Inicial/PaginaInicialProvider";
import { useContext } from "react";
import styled from "styled-components";

export const Post = styled.ul`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;
    margin: 20px 0;
`
export const CardPost = styled.li`
    width: 80%;

    @media (max-width: 730px) {
       width: 90%;
    }
`

const CortesPosts = () => {

    const {
        postsGaleria,
        setPostSelecionado
    } = useContext(PaginaInicialContext);

    return (
        <main>
            <Post>
                {postsGaleria.map((post) => (
                    <CardPost key={post}>
                        <PostLine
                            post={post}
                            onCorteSelecionado={setPostSelecionado}
                        />
                    </CardPost>
                ))}
            </Post>
        </main>
    )
}

export default CortesPosts