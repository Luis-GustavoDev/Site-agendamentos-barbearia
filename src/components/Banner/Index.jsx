import logo from "assert/LogoBarbearia.png";
import styled from "styled-components";
import Descricao from "./Descricao";

const BannerEstilizado = styled.main`
    display: grid;
    max-width: 100%;
    grid-template-columns: 50% 50%;
    padding: 3rem 7.25rem 6.25rem;
    background-color: var(--cor-fonte-principal);
    color: var(--branco);

    @media (max-width: 1044px) {
        grid-template-columns: auto;
    }
`
const ContainerImagens = styled.section`
    height: 25.3rem;
    display: flex;
    align-items: center;
    justify-content: end;

    @media (max-width: 1044px) {
        display: none;
    }
`
const LogoBarbearia = styled.img`
    width: 100%;
    border-radius: 50%;
`
const Banner = () => {
    return (
        <BannerEstilizado>
            <ContainerImagens>
                <LogoBarbearia src={logo} alt="foto do barbeiro"/>
            </ContainerImagens>
            <Descricao />
        </BannerEstilizado>
    )
}

export default Banner