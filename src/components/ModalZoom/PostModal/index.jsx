import { useAgendados } from "hooks/useAgendados"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"

const Container = styled.div`
    display: grid;
    grid-template-columns: 58% auto;

    @media (max-width: 1137px){
        grid-template-columns: 100%;
    }
`
const Imagem = styled.img`
    background-color: black;
    width: 100%;
    border-radius: 12px 0 0 12px;

    @media (max-width: 1137px){
        display: none;
    }
`
const InformeDados = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    color: var(--cor-fonte-principal);
    padding-left: 10px;
    height: 500px;
    max-width: 100%;
    width: 90%;

    h2 {
        line-height: 40px;
        padding-bottom: 40px;
        font-size: 35px;
    }

    @media (max-width: 964px) {
        h2{
            display: flex;
            text-align: center;
        }
    }
`
const Footer = styled.footer`
    display: flex;
    justify-content: end;
    gap: 10px;

    button.cancelar{
        color: black;
        background-color: transparent;
        border: none;
    }
`
const Campos = styled.div`
    display: flex;
    gap: 10px;
    width: 100%;
    flex-direction: column;
    justify-content: space-around;
`
const InputFormulario = styled.input`
    border: none;
    border-bottom: 2px solid;
    padding: 5px 10px;
`
const Botao = styled.button`
    background-color: var(--cor-fonte-principal);
    color: var(--branco);
    border-radius: 16px;
    padding: 6px 8px;
    margin: 15px 0;
    cursor: pointer;
`

const PostModal = ({ post, aoFechar }) => {

    const {
        marcarHorario,
        submeterFormulario,
        nome,
        setNome,
        horario,
        setHorario,
        data,
        setData
    } = useAgendados();

    const navegar = useNavigate("/agendados")

    return (
        <Container>
            <Imagem src={`/assets/posts/${post.id}/capa.png`} />
            <InformeDados>
                <h2>Finalize seu atendimento!</h2>
                <form method="dialog" onSubmit={submeterFormulario}>
                    <div>
                        <Campos>
                            <InputFormulario
                                required
                                type="text"
                                name="agedamento"
                                placeholder="Nome"
                                value={nome}
                                onChange={(e) => setNome(e.target.value)}
                            />

                            <InputFormulario
                                required
                                type="number"
                                name="agedamento"
                                placeholder="Horários"
                                value={horario}
                                onChange={(e) => setHorario(e.target.value)}
                            />

                            <InputFormulario
                                required
                                type="date"
                                name="agedamento"
                                value={data}
                                onChange={(e) => setData(e.target.value)}
                            />
                        </Campos>
                    </div>
                    <Footer>
                        <Botao className="cancelar" onClick={aoFechar}>
                            Cancelar
                        </Botao>
                        <Botao onClick={() => { marcarHorario(post); navegar("/agendados") }}>
                            Agendar
                        </Botao>
                    </Footer>
                </form>
            </InformeDados>
        </Container>
    )
}

export default PostModal