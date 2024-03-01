import { NavLink } from "react-router-dom"
import css from '../NavBar/NavBar.module.css'

export const NavBar = () => {
    return (
        <div className={ css.containerNav}>
            <nav className={css.nav}>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/contacts'>Contacts</NavLink>
                <NavLink to='/register'>Register</NavLink>
                <NavLink to='/login'>Log In</NavLink>
            </nav>
        </div>
    )
}