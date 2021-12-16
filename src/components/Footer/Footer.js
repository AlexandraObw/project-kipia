import './Footer.css'
import {Link} from "react-router-dom";

function Footer() {
    return (
        <div className="footer">
            <nav>
                <Link to = {'main'} className={'footer__link link'}>Информация</Link>
                <Link to = {'contacts'} className={'footer__link link'}>Контакты</Link>
            </nav>
        </div>
    )
}

export default Footer;