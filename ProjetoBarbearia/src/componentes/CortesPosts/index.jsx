import PostLine from "componentes/Post_line/Index";
// import PostCard from "componentes/PostCard/Index";
import styled from "styled-components";

const Post = styled.ul`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding-bottom: 3.62rem;
    gap: 10px;
`
const CardPost = styled.li`
    width: 80%;

    @media (max-width: 730px) {
       width: 90%;
    }
`

const CortesPosts = ({ posts = [], onCorteSelecionado }) => {

    return (
        <main>
            <Post>
                {posts.map((post) => (
                    <CardPost key={post}>
                        <PostLine
                            post={post}
                            onCorteSelecionado={onCorteSelecionado}
                        />
                    </CardPost>
                ))}
            </Post>
        </main>
    )
}

export default CortesPosts