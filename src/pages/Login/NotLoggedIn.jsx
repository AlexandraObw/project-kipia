import {Link} from "react-router-dom";

export default function NotLoggedIn() {
    return (
    <div className="main__private private">
        <p className="page-text main__page-text">Для просмотра этой страницы необходима авторизация!</p>
        <Link to={'/login'} className="main__button-login button-login">
            <button className="main__button button">Войти</button>
        </Link>
    </div>
)
}
