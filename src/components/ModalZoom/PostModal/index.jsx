import { useAgendados } from "context/Hooks/useAgendados"
import { PaginaInicialContext } from "context/Inicial/PaginaInicialProvider"
import { useContext } from "react"
import styled from "styled-components"
import check from "imagens/icons/iconCheck.png"

const Container = styled.div`
    display: grid;
    grid-template-columns: 58% auto;

    @media (max-width: 1137px){
        grid-template-columns: 100%;
    }
`
const ContainerSVG = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    svg {
        width: 50%
    }

    h1 {
        color: var(--azul-medio);
    }
`
const Imagem = styled.img`
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
    color: var(--azul-forte);
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
const Form = styled.form`
    display: flex;
    gap: 10px;
    width: 100%;
    flex-direction: column;
    justify-content: space-around;

    input, select {
        border: none;
        border-bottom: 2px solid;
        padding: 5px 10px;
    }
`
const Botao = styled.button`
    background-color: var(--azul-forte);
    color: var(--branco);
    border-radius: 16px;
    padding: 6px 8px;
    margin: 15px 0;
    cursor: pointer;
`
const CampoSelect = styled.select`
    
`

const PostModal = () => {

    const {
        marcarHorario,
        submeterFormulario,
        form,
        aoDigitarCampoDoFormulario,
        submitado,
        horarios
    } = useAgendados();

    const {
        setPostSelecionado,
        postSelecionado } = useContext(PaginaInicialContext)

    return (
        <>
            {!submitado ? (
                <Container>
                    <Imagem src={`/assets/posts/${postSelecionado.id}/capa.png`} />
                    <InformeDados>
                        <h2>Finalize seu atendimento!</h2>
                        <Form method="dialog" onSubmit={submeterFormulario}>
                            <input
                                type="text"
                                name="agedamento"
                                placeholder="Nome"
                                value={form.nome}
                                onChange={(e) => aoDigitarCampoDoFormulario("nome", e.target.value)}
                                required
                            />

                            <CampoSelect
                                name="Horarios"
                                onChange={(e) => aoDigitarCampoDoFormulario("horario", e.target.value)}
                                required
                            >
                                <option key={"vazia"} value={null}>Horarios</option>
                                {horarios.map((e) => (
                                    <option key={e} value={e}>{e}</option>
                                ))}

                            </CampoSelect>

                            <input
                                type="date"
                                name="agedamento"
                                value={form.data}
                                onChange={(e) => aoDigitarCampoDoFormulario("data", e.target.value)}
                                required
                            />

                            <Footer>
                                <Botao className="cancelar" onClick={() => setPostSelecionado(null)}>
                                    Cancelar
                                </Botao>
                                <Botao onClick={() => marcarHorario(form, postSelecionado.id)}>
                                    Agendar
                                </Botao>
                            </Footer>
                        </Form>
                    </InformeDados>
                </Container>
            ) : (
                <ContainerSVG className="svg">
                    <h1>Horário agendado</h1>
                    <svg viewBox="0 23 100 55">
                        <circle cx={50} cy={50} r={25} fill="#041833" opacity={0.2} />
                        <circle cx={50} cy={50} r={15} fill="#1875E8" />
                        <image x={42} y={42} href={check} style={{ width: "15px" }} />
                    </svg>

                    <Botao onClick={() => setPostSelecionado(null)}>
                        voltar
                    </Botao>
                </ContainerSVG>
            )
            }
        </>
    )
}

export default PostModal