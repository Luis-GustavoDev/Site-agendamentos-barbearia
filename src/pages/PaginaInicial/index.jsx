import CortesPosts from "components/CortesPosts";
import Banner from "components/Banner/Index";
import Rodape from "components/Rodape/Index";
import ModalZoom from "components/ModalZoom";

const PaginaInicial = () => {
  return (
    <>
      <Banner />
      <CortesPosts />
      {/* adicionar descrição em baixo para mobile
      <Descricao /> */}
      <Rodape />
      <ModalZoom />
    </>
  );
}

export default PaginaInicial;
