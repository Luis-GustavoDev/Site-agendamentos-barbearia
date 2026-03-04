import { useAgendados } from "context/HookAgendados/useAgendados"
import { PaginaInicialContext } from "context/Inicial/PaginaInicialProvider"
import { useContext } from "react"
import styled from "styled-components"
import check from "imagens/icons/iconCheck.png"

const Container = styled.div`
    display: grid;
    grid-template-columns: 58% auto;

    img.true {
        display: none;
    }

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
const Campos = styled.form`
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

const PostModal = () => {

    const {
        marcarHorario,
        submeterFormulario,
        form,
        aoDigitarCampoDoFormulario,
        submitado
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
                        <Campos method="dialog" onSubmit={submeterFormulario}>
                            <InputFormulario
                                type="text"
                                name="agedamento"
                                placeholder="Nome"
                                value={form.nome}
                                onChange={(e) => aoDigitarCampoDoFormulario("nome", e.target.value)}
                                required
                            />

                            <InputFormulario
                                type="time"
                                name="agedamento"
                                placeholder="Horários"
                                value={form.horario}
                                onChange={(e) => aoDigitarCampoDoFormulario("horario", e.target.value)}
                                required
                            />

                            <InputFormulario
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
                        </Campos>
                    </InformeDados>
                </Container>
            ) : (
                <Container>
                    <Imagem className={submitado} src={`/assets/posts/${postSelecionado.id}/capa.png`} />
                    <svg viewBox="0 0 100 100">
                     <circle cx={50} cy={50} r={45} fill="#22c55e" opacity={0.2}/>
                     <circle cx={50} cy={50} r={35} fill="#22c55e" />
                     <img src={check}  alt="icon de confirmação" style={{zIndex: 0}}/> 
                    </svg>
                </Container>
            )
            }
        </>
    )
}

export default PostModal