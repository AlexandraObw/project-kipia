import {repair} from "../../databases/repair";
import NotLoggedIn from "../Login/NotLoggedIn";
import {useContext, useEffect, useState} from "react";
import {AppContext} from "../../App";
import './ViewRequests.css';


export default function ViewRequests() {

    const [posts, setPosts] = useState([])
    const {isAuth, isVisible, setIsVisible} = useContext(AppContext);

    useEffect(() => {
        const response = repair;
        setPosts(response)
    }, [])

    const deletePost = (id) => {
        const result = posts.filter(item => item.id !== id)
        setPosts(result)
    }

    if (!isAuth) {
        return (
            <div className="main__repair repair">
                <h1 className="title form__title">Заявки</h1>
                <NotLoggedIn/>
            </div>
        )
    } else {
        return (
            <div>
                <button className="modal__button button"
                        onClick={() => setIsVisible({isVisible, selection: false})}>Закрыть окно
                </button>
                <h1 className="title catalog__title">Заявки</h1>
                {posts.map((post) => {
                    return (
                        <ul className="requests__list list">
                            <li key={post.id} className="requests__card">
                                <p><b>Номер обращения:</b> {post.id}</p>
                                <p><b>Тема обращения:</b> {post.title}</p>
                                <p><b>Текст обращения:</b> {post.body}</p>
                                <button onClick={() => deletePost(post.id)} className="button body__button">Удалить заявку</button>
                            </li>
                        </ul>
                    )
                })}
            </div>
        )
    }
}