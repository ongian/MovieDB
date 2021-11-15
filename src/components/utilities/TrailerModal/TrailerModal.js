import React from "react";
import ReactDOM from "react-dom";
import style from './TrailerModal.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';


const CloseModal = (props) => {
    return <FontAwesomeIcon icon={faTimesCircle} className={style['close-modal']} onClick={props.closeTrailer} />
};
const ModalOverlay = props => {
    return <div className={style.overlay} onClick={props.closeTrailer}></div>;
};
const ModalContent = props => {
    return <div className={style['modal-content']}><CloseModal closeTrailer={props.closeTrailer}/>{props.children}</div>
};

const TrailerModal = (props) => {
    return <>
        {ReactDOM.createPortal(<ModalOverlay closeTrailer={props.closeTrailer} />, document.querySelector('.trailer-modal-overlay'))}
        {ReactDOM.createPortal(<ModalContent closeTrailer={props.closeTrailer}>{props.children}</ModalContent>, document.querySelector('.trailer-modal-content'))}
    </>;
}
 
export default TrailerModal;