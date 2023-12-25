import { NavLink } from "react-router-dom"

export const NavBar = ()=>{
    return(
        <nav>
            <NavLink to={'/core'}>CoreJava</NavLink>
        </nav>
    )
}