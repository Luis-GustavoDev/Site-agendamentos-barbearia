import { createContext, useState } from "react";
import posts from "json/posts.json";

export const PaginaInicialContext = createContext();
PaginaInicialContext.displayName = "posts";

export const PaginaInicialProvider = ({ children }) => {

    const [postsGaleria] = useState(posts)
    const [postSelecionado, setPostSelecionado] = useState(null)

    return (
        <PaginaInicialContext.Provider value={{ postsGaleria, postSelecionado, setPostSelecionado}}>
            {children}
        </PaginaInicialContext.Provider>
    )
} 