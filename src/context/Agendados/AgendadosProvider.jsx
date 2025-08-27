import { createContext, useState } from "react"

export const AgendadosContext = createContext();
AgendadosContext.displayName = "Agendados"

export const AgendadosProvider = ({ children }) => {

    const [agendados, setAgendados] = useState([]);

    return (
        <AgendadosContext.Provider value={{ agendados, setAgendados }}>
            {children}
        </AgendadosContext.Provider>
    )
}

export default AgendadosProvider