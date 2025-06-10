import styled from "styled-components"

const Container = styled.div`
    display: grid;
    grid-template-columns: 50% 50%;
`
const Imagem = styled.img`
    background-color: black;
    width: 100%;
    border-radius: 16px 0 0 16px;
`
const InformeDados = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto ;
    color: var(--cor-fonte-principal);
    padding-left: 10px;
    height: 500px;
    max-width: 100%;
`
const Formulario = styled.form`
    display: flex;
    gap: 10px;
`
const BoxLabel = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`
const BoxInput = styled.div`
    display: flex;
    flex-direction: column;
`
const LabelForm = styled.label`
    font-size: 20px;
    font-weight: 600;
`
const InputFormulario = styled.input`
    border-radius: 16px;
    padding: 5px 10px;
    width: 200px;
`
const BotaoAgendar = styled.button`
    background-color: var(--cor-fonte-principal);
    color: var(--azul-medio);
    border-radius: 16px;
    padding: 6px;
    font-weight: 600;
    margin: 15px 0;
    cursor: pointer;
`

const PostModal = ({ post }) => {
    return (
        <Container>
            <Imagem src={`/assets/posts/${post.id}/capa.png`} />
            <InformeDados>
                <h2>Finalize seu atendimento</h2>
                <Formulario action="">
                    <BoxLabel>
                        <LabelForm>Nome: </LabelForm> <br />
                        <LabelForm>Dia: </LabelForm>
                    </BoxLabel>
                    <BoxInput>
                        <InputFormulario type="text" name="agedamento" /> <br />
                        <InputFormulario type="date" name="agedamento" />
                    </BoxInput>
                </Formulario>
                <form method="dialog">
                    <BotaoAgendar>
                        Agendar
                    </BotaoAgendar>
                </form>
            </InformeDados>
        </Container>
    )
}

export default PostModal