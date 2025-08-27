import styled from "styled-components"

const ContainerDescricao = styled.section`
    position: relative;
`

const Titulo = styled.h1`
    font-size: 3.5rem;
    font-family: var(--fonte-secundaria);
    font-weight: bold;
    line-height: 5rem;
    margin-top: 1rem;
    margin-bottom: 3.1rem;
`

const Localizacao = styled.p`
    font-size: 1.5rem;
    font-family: var(--fonte-secundaria);
    line-height: 1.9rem;
    margin-bottom: 20px;
`
const NumeroCelular = styled.a`
    font-weight: 600;
    color: #1f80ff;
`

const Descricao = () => {
    return (
        <ContainerDescricao>
            <Titulo>Bem-vindo ao site da melhor barbearia de jequitaí!</Titulo>

            <Localizacao>
                Rua: Exemplo | Numero: Exemplo | Bairro: Exemplo <br />
            </Localizacao>

            <NumeroCelular href="tel:38998982539">Whatsapp: 38998982539</NumeroCelular>
        </ContainerDescricao>
    )
}

export default Descricao