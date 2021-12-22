import './Private.css';
import {useContext} from "react";
import {AppContext} from "../../App";
import NotLoggedIn from "../Login/NotLoggedIn";

export default function Private() {
    const {isVisible, setIsVisible, isAuth, logout} = useContext(AppContext)

    if (!isAuth) {
        return (
            <div className="main__private private">
                <h1 className="title form__title">Личный кабинет</h1>
                <NotLoggedIn />
            </div>
        )
    } else {
        return (
            <div className="main__private private">
                <h1 className="title form__title">Личный кабинет</h1>
                <p className="page-text main__page-text">Добрый день! Вы вошли на сайт </p>
                <button className="header__button button" onClick={logout}>Выйти</button>
                <p className="page-text main__page-text">В качестве авторизированного пользователя, Вы можете воспользоваться следующими услугами:</p>
                <button className="body__button button" onClick={() => setIsVisible({isVisible, repair: true})}>
                    Оставить заявку на ремонт или подбор оборудования
                </button>
                <button className="body__button button" onClick={() => setIsVisible({isVisible, requests: true})}>
                    Смотреть и редактировать заявки
                </button>
            </div>
        )
    }
}