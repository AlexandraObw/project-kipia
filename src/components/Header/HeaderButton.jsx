import './HeaderButton.css'
import {Link} from "react-router-dom";
import {useContext} from "react";
import {AppContext} from "../../App";

export default function HeaderButton() {
    const {isVisible, setIsVisible} = useContext(AppContext)
    return (
            <button className="header__button button" onClick={()=>setIsVisible(true)}>Войти</button>
)
}