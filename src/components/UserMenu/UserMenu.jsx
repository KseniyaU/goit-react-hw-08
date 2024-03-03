import { useDispatch } from "react-redux";
import { useAuth } from '../../hooks';
import { logOut } from '../../redux/auth/operations';
import css from '../UserMenu/UserMenu.module.css';

export const UserMenu = () => {
    const dispatch = useDispatch();
    const { user } = useAuth();

    return (
        <div>
            <p>Welcome, {user.name}</p>
            <button type="button" onClick={()=> dispatch(logOut())}>LogOut</button>
        </div>
    )
    
}