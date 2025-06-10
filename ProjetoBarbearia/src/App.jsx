import CortesPosts from "./componentes/CortesPosts";
import Banner from "componentes/Banner/Index";
import Rodape from "componentes/Rodape/Index";
import styled from "styled-components";
import posts from "./json/posts.json"
import { useState } from "react";
import ModalZoom from "componentes/ModalZoom";

const Container = styled.div`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const App = () => {

  const [postsGaleria, setPostsGaleria] = useState(posts)
  const [postSelecionado, setPostSelecionado] = useState(null)

  return (
    <Container>
      <Banner />
      <CortesPosts
        onCorteSelecionado={post => setPostSelecionado(post)}
        posts={postsGaleria}
      />
      <Rodape />
      <ModalZoom post={postSelecionado} />
    </Container>
  );
}

export default App;
