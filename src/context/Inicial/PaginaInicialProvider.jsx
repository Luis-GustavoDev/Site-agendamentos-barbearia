import { resgatarCortes } from "api";
import { createContext, useEffect, useState } from "react";

export const PaginaInicialContext = createContext();
PaginaInicialContext.displayName = "posts";

export const PaginaInicialProvider = ({ children }) => {

    const [postsGaleria, setPostGaleria] = useState([])
    const [postSelecionado, setPostSelecionado] = useState(null)

    const obterCortes = async () => {
        try {
            const response = await resgatarCortes()
            setPostGaleria(response)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        obterCortes()
    }, [])

    return (
        <PaginaInicialContext.Provider value={{
            postsGaleria,
            postSelecionado,
            setPostGaleria,
            setPostSelecionado
        }}>
            {children}
        </PaginaInicialContext.Provider>
    )
} 