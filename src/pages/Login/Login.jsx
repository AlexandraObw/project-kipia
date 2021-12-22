import './Login.css'
import {useContext, useState} from "react";
import {AppContext} from "../../App";
import {users} from "../../databases/users";
import {useNavigate} from "react-router-dom";

export default function Login() {

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const {login} = useContext(AppContext);
    const navigate = useNavigate();

    const submitForm = (event) => {
        event.preventDefault()

        const getUser = users.find((user) => (
            user.name === name && user.password === password))

        if (getUser) {
            login();
            alert('Вы успешно авторизовались!');
            navigate('/private');
        } else {
            alert('Неверное имя пользователя или пароль!');
        }
    }


    return (
        <form className = "login__form form" onSubmit={submitForm}>
            <h1 className = "title form__title">Войти в систему</h1>
            <label className = "label form__label" htmlFor="name">Логин</label>
            <input className = "input form__input"
                   id = "name"
                   type = "text"
                   required
                   placeholder = "Введите логин"
                   value = {name}
                   onChange={(event) => setName(event.target.value)}
            />
            <label className = "label form__label" htmlFor="password">Пароль</label>
            <input className = "input form__input"
                   id = "password"
                   type = "password"
                   required
                   placeholder = "Введите пароль"
                   value = {password}
                   onChange={(event) => setPassword(event.target.value)}
            />
            <button className="button form__button" type="submit">Войти</button>
        </form>
    );
}