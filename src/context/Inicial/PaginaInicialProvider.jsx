import { resgatarCortes } from "api";
import { createContext, useEffect, useState } from "react";

export const PaginaInicialContext = createContext();
PaginaInicialContext.displayName = "posts";

export const PaginaInicialProvider = ({ children }) => {

    const [postsGaleria, setPostGaleria] = useState([])
    const [postSelecionado, setPostSelecionado] = useState(null)

    try {
        const obterCortes = async () => {
            const response = await resgatarCortes()
            setPostGaleria(response)
        }

        useEffect(() => {
            obterCortes()
        }, [])

    } catch (error) {
        console.log(error)
    }

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