import './Logo.css'
import {Link} from "react-router-dom";

const Logo = () => {
    return (
        <Link to = {'/'} className={'header__link link'}>
            <img src="https://i.ibb.co/R3mxV9z/logosm.png" alt="Перейти на главную страницу" className="header__logo logo"/>
            <h1 className="header__title title">КИП-Краснодар</h1>
        </Link>
    )
}

export default Logo;