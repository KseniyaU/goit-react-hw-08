
import { Navigation } from '../Navigation/Navigation';
import { AuthNav } from "../AuthNav/AuthNav";
import { UserMenu } from "../UserMenu/UserMenu";
import { useAuth } from '../../hooks';
import css from '../NavBar/NavBar.module.css';

export const NavBar = () => {
    const {isLoggedIn } = useAuth();
    return (
        <header className={css.containerNav}>
            <Navigation />
            { !isLoggedIn ? <UserMenu/> : <AuthNav/>}
       </header>
    )
}