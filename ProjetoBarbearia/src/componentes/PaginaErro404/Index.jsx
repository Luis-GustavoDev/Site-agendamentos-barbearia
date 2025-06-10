import { useNavigate } from "react-router-dom"
import imagemErro from "assert/erro_404.png"
import Rodape from "componentes/Rodape/Index"
import styled from "styled-components";

const Container = styled.div`
    position: relative;
    padding: 3rem 12rem 12rem 12rem ;
    background-color: var(--cor-fonte-principal);
    color: var(--branco);
    text-align: center;
`

const TipoDoErro = styled.h1`
    font-family: var(--fonte-secundaria);
    color: var(--azul-medio);
    font-size: 5.76rem;
    padding-bottom: var(--space-padding);
`

const TituloDaPagina = styled.h2`
    font-family: var(--fonte-secundaria);
    font-size: 2.88rem;
    line-height: 80px;
    padding-bottom: var(--space-padding);
`

const Paragrafo = styled.p`
    font-family: var(--fonte-principal);
    font-size: 1.44rem;
    padding-bottom: var(--space-padding);
`

const LinkImagem = styled.div`
    display: flex;
    gap: 150px;
    position: absolute;
    right: 350px;
`

const LinkdeVolta = styled.div`
    text-align: start;
    padding: 15px 30px;
    left: 0;
`

const EspacoEmBranco = styled.div`
    height: 400px;
`

const PaginaErro404 = () => {

    const navegar = useNavigate();

    return (<>
        <Container>
            <TipoDoErro>404</TipoDoErro>
            <TituloDaPagina>
                Ops! Página não encontrada.
            </TituloDaPagina>

            <Paragrafo>
                Tem certeza de que era isso que você estava procurando?
                Aguarde uns instantes e recarregue a página, ou volte para a página inicial.
            </Paragrafo>

            <LinkImagem>
                <LinkdeVolta onClick={() => navegar(-1)}>
                    <button>ola</button>
                </LinkdeVolta>
                    <img src={imagemErro} alt="imagem de erro"/>
            </LinkImagem>
        </Container>
        <EspacoEmBranco />

        <Rodape />
    </>)
}

export default PaginaErro404