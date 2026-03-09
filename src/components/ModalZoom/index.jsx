import styled from "styled-components";
import PostModal from "./PostModal";
import { useContext } from "react";
import { PaginaInicialContext } from "context/Inicial/PaginaInicialProvider";

const Overlay = styled.div`
    background-color: rgba(0, 0, 0, 0.7);
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
`
const Dialog = styled.dialog`
    position: absolute;
    border-radius: 16px;
    top: 15%;
    left: 25%;
    width: 50%;
`
const ModalZoom = () => {

    const { postSelecionado } = useContext(PaginaInicialContext)

    return (
        <>
            {postSelecionado && <>
                <Overlay />
                <Dialog open={!!postSelecionado}>
                    <PostModal />
                </Dialog>
            </>}
        </>
    )
}

export default ModalZoom;