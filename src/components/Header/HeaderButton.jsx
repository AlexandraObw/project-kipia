import './HeaderButton.css'
import {useContext} from "react";
import {AppContext} from "../../App";
import {Link} from "react-router-dom";

export default function HeaderButton() {
    const {isAuth, logout} = useContext(AppContext)
    return (
        <Link to = {'login'} className="header__button-login button-login">
            {isAuth && <button className="header__button button">Выйти</button>}
            {!isAuth && <button className="header__button button" onClick={logout}>Войти</button> }
        </Link>
    )
}