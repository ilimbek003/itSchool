import React from 'react';
import './modal.css'
const Modal = ({active, setActive}) => {
    return (
        <div className={active ? 'modal active' : 'modal'}  onClick={() => setActive(false)}>
           <div className="container">
               <div className="modal__content" onClick={event => event.stopPropagation()}>

               </div>
           </div>
        </div>
    );
};

export default Modal;