import { useNavigate } from "react-router-dom"
import imagemErro from "assert/erro_404.png"
import styled from "styled-components";

const Container = styled.div`
    position: relative;
    padding: 3rem 8rem 8rem 8rem;
    background-color: var(--cor-fonte-principal);
    color: var(--branco);
    text-align: center;

    @media (max-width: 1285px){
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
    }
`
const Teste = styled.div`
    width: 100%;
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
    display: grid;
    grid-template-columns: auto auto;
    gap: 150px;
    position: absolute;
    right: 350px;

    @media (max-width: 1285px) {
        display: flex;
        justify-content: center;
        width: 100%;
        position: static;
        
        img {
            display: none;
        }
    }
`
const LinkdeVolta = styled.div`
    padding: 50px 30px;

    button {
        background-color: var(--azul-medio);
        color: var(--branco);
        padding: 10px 45px;
        border: none;
        border-radius: 10px;
        cursor: pointer;
    }
`
const EspacoEmBranco = styled.div`
    height: 200px;

    @media (max-width: 1285px) {
        display: none;
    }
`

const PaginaErro404 = () => {

    const navegar = useNavigate();

    return (<>
        <Container>
            <Teste>
                <TipoDoErro>404</TipoDoErro>
                <TituloDaPagina>
                    Ops! Página não encontrada.
                </TituloDaPagina>

                <Paragrafo>
                    Tem certeza de que era isso que você estava procurando?
                    Aguarde uns instantes e recarregue a página, ou volte para a página inicial.
                </Paragrafo>
                <LinkImagem>
                    <LinkdeVolta>
                        <button onClick={() => navegar('/')}>Voltar</button>
                    </LinkdeVolta>
                    <img src={imagemErro} alt="imagem de erro" />
                </LinkImagem>
            </Teste>
        </Container>
        <EspacoEmBranco />
    </>)
}

export default PaginaErro404