import './Header.css'
import {Link} from "react-router-dom";
import Logo from "../Logo/Logo";

export default function Header() {
    return (
        <header className="header">
            <Logo />
            <Link to = {'main'} className={'header__link link'}>
                 <h1 className="header__title title">КИП-Краснодар</h1>
            </Link>
                 <nav className="header__navigation">
                    <Link to = {'main'} className={'header__link link'}>Главная страница</Link>
                    <Link to = {'catalog'} className={'header__link link'}>Каталог</Link>
                    <Link to = {'contacts'} className={'header__link link'}>Контакты</Link>
                    <Link to = {'login'} className={'header__link link'}>Войти</Link>
                 </nav>

                     <Link to = {'order-repair'} className={'header__link link'}>Оставить заявку на ремонт оборудования</Link>
                    <Link to = {'order-selection'} className={'header__link link'}>Оставить заявку на подбор оборудования</Link>

</header>
    )
}
