import React from 'react';
import {Link} from 'react-router-dom';
import Logosm from '../public/logosm.png'

function Logo() {
    return (
        <div className = {'header__logo logo'}>
            <Link to = "/">
                <img src={Logosm} alt="Вернуться на главную страницу"/>
            </Link>
        </div>
    )
}

export default Logo;