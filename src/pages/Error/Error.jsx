import {Link} from "react-router-dom";

export default function Error() {
    return (
        <div className="page-text main__page-text">
            <p>Страница не найдена!</p>
            <Link to = {'index'} className={'main__link link'}>Вернуться на главную страницу</Link>
        </div>
    )
};