import Agendados from "pages/Agendados";
import PaginaErro404 from "pages/PaginaErro404/Index";
import PaginaInicial from "pages/PaginaInicial";
import PaginaPadrao from "pages/PaginaPadrao";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaginaPadrao />} >
          <Route index element={<PaginaInicial />} />
          <Route path="/agendados" element={<Agendados />} />
          <Route path="*" element={<PaginaErro404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
