import { NavLink } from "react-router-dom"

const MenuLink = ({ children, to }) => {
    return (
        <NavLink to={to}
            style={({ isActive }) => {
                return {
                    textDecoration: isActive ? "underline" : "",
                    color: isActive ? "black" : "purple",
                };
            }}
        >
            {children}
        </NavLink>
    )
}

export default MenuLink