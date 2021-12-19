import './Modal.css'
import Login from "../../pages/Login/Login";
import {useContext} from "react";
import {AppContext} from "../../App";

const Modal = props => {
    const {isVisible, setIsVisible} = useContext(AppContext)
    return (
            <div className={`modal__wrapper ${props.isOpened ? 'open' : 'close'}`}>
                <div className="modal__modal-body modal-body">
                    <button className="modal__button button" onClick={()=>setIsVisible(false)}>Закрыть окно</button>
                    <Login />
                </div>
            </div>
        )
};

export default Modal;