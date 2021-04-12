import React from "react";

class Modal extends React.Component {
    render() {
        const {headerText, closeButton, text, status, actions} = this.props;
        return (
            <div className='modal-wrapper' onClick={(e)=> {
                if(e.target === document.querySelector(".modal-wrapper")) {
                    status()
                }
            }}>
                <div className='modal'>
                    <div className='modal__header'>
                        {headerText}
                        {closeButton && <span className='modal__header__cross' onClick={() =>{status()}}>X</span>}
                    </div>
                    <div className='modal-txt'>
                        {text}
                    </div>
                    <div className='modal__buttons-block'>
                        {actions.map((button, key) => {
                            return (button)
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default Modal;