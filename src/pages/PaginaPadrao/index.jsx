import AgendadosProvider from "context/Agendados/AgendadosProvider";
import { PaginaInicialProvider } from "context/Inicial/PaginaInicialProvider";
import { Outlet } from "react-router-dom";

const PaginaPadrao = () => {
    return (
        <PaginaInicialProvider>
            <AgendadosProvider>
                <Outlet />
            </AgendadosProvider>
        </PaginaInicialProvider>
    )
}

export default PaginaPadrao;