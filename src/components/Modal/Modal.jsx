import './Modal.css'

const Modal = props => {
    return (
            <div className={`modal__wrapper ${props.isOpened ? 'open' : 'close'}`}>
                <div className="modal__modal-body modal-body">
                    {props.children}
                </div>
            </div>
        )
};

export default Modal;