import styled from "styled-components"
import { ReactComponent as MarcaRegistrada } from "assert/marca_registrada.svg"

const Footer = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--branco);
    background-color: var(--cor-fonte-principal);
    padding: 2rem 0;

    a {
        color: var(--azul-medio);
        text-decoration: underline;
    }
`

const Rodape = () => {
    return (
        <Footer>
            <MarcaRegistrada />    
            <h3>Desenvolvido por <a href="https://www.instagram.com/_luisgustvo">Luis gustavo</a></h3> 
        </Footer>
    )
}

export default Rodape