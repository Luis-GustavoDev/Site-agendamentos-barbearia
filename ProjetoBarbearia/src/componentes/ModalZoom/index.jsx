import styled from "styled-components";
import PostModal from "./PostModal";

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

const ModalZoom = ({ post }) => {
    return (
        <>
            {/* open={!!post} é um recurso técnico que quer dizer se há um objeto sendo passado (true), ou não (false)*/}
            {/* {post && ...} significa se post está chegando como nulo, se sim, não exiba nada, caso contrário exiba o conteúdo,
            pois não há como acessar os atributos de um valor null*/}
            {post && <>
                <Overlay />
                <Dialog open={!!post}>
                    <PostModal post={post} />
                </Dialog>
            </>}
        </>
    )
}

export default ModalZoom;