import './OrderRepair.css'
import {useContext, useState} from "react";
import {AppContext} from "../../App";
import NotLoggedIn from "../Login/NotLoggedIn";
import {customAlphabet} from "nanoid";
import {repair} from "../../databases/repair";

const nanoid = customAlphabet('1234567890', 3)

export default function OrderRepair() {

    const {isAuth, isVisible, setIsVisible} = useContext(AppContext);
    const {setPosts} = useContext(AppContext)
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    const submitRepairForm = (event) => {
        event.preventDefault()
        const newPost = {title, body, id: Number(nanoid())}
        repair.push(newPost)
        setPosts(repair)
        setTitle('')
        setBody('')
        // alert('Заявка успешно отправлена!');
        setIsVisible({isVisible, repair: false})
    }

    if (!isAuth) {
        return (
            <div className="main__repair repair">
                <h1 className="title form__title">Заявка на ремонт оборудования</h1>
                <NotLoggedIn />
            </div>
        )
    } else {
        return (
        <div className="page-text main__page-text">
            <button className="modal__button button" onClick={()=>setIsVisible({isVisible, repair: false})}>Закрыть окно</button>
            <h2 className="title form__title">Отправить заявку на ремонт или подбор оборудования оборудования</h2>
            <p>Здесь Вы можете оставить заявку на ремонт или подбор оборудования. Пожалуйста, заполните все поля.</p>

            <form className = "repair__form form" onSubmit={submitRepairForm}>
                <label className = "label repair__label" htmlFor="title">Тема</label>
                <input className = "input repair__input-title"
                       id = "title"
                       type = "text"
                       required
                       placeholder = "Введите тему обращения"
                       value = {title}
                       onChange={event => setTitle(event.target.value)}
                />
                <label className = "label repair__label" htmlFor="body">Текст</label>
                <input className = "input repair__input-body"
                       id = "body"
                       type = "text"
                       required
                       placeholder = "Введите текст обращения"
                       value = {body}
                       onChange={event => setBody(event.target.value)}
                />
                <button className="button form__button" type="submit">Отправить</button>
            </form>

        </div>
        )
    }
}