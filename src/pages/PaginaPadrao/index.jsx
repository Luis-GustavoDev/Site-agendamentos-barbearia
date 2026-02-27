import { PaginaInicialProvider } from "context/Inicial/PaginaInicialProvider";
import { Outlet } from "react-router-dom";

const PaginaPadrao = () => {
    return (
        <PaginaInicialProvider>
            <Outlet />
        </PaginaInicialProvider>
    )
}

export default PaginaPadrao;