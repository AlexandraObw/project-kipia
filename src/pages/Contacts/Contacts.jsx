import './Contacts.css'

function Contacts() {
    return (
        <div className="page-text main__page-text">
            <iframe
                src="https://yandex.ru/map-widget/v1/?um=constructor%3A3b49a6f5dd866e1f638b2e505e441f7775d0a2804dfd40a5f69fe0a8f4d39462&amp;source=constructor"
                width="100%" height="350" frameBorder="0"></iframe>
            <ul className="contacts__list">
                <li className="contacts__list-elem">Адрес:</li>
                <li>ул. Красная, 1000</li>
                <li className="contacts__list-elem">Режим работы:</li>
                <li>ПН-ПТ 09:00-18:00</li>
                <li>СБ-ВС 10:00-18:00</li>
                <li><a href="mailto:test@test.com?subject=КИП-Краснодар">test@test.com</a></li>
                <li><a href="tel:+79091234567">+79091234567</a></li>
            </ul>

        </div>
    )
}

export default Contacts