import './HeaderList.css'
import {Link} from "react-router-dom";

export default function HeaderList() {
    return (
        <div>
            <ul className="header__list list">
                 <li><Link to = {'/'} className={'header__link link'}>Главная страница</Link></li>
                 <li><Link to = {'catalog'} className={'header__link link'}>Каталог</Link></li>
                 <li><Link to = {'private'} className={'header__link link'}>Личный кабинет</Link></li>
                 <li><Link to = {'contacts'} className={'header__link link'}>Контакты</Link></li>
            </ul>
        </div>
    )
}