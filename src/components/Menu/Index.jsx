import MenuLink from "../MenuLink/Index"
import styled from "styled-components"

const Nav = styled.nav`
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Menu = () => {
    return (
        <header>
            <Nav>
                <MenuLink to={"/"}>
                    Inicio
                </MenuLink>
            </Nav>
        </header>
    )
}

export default Menu