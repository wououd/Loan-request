import React from 'react'

const Modal = ({isVisible, errorMessage = null}) => {
  // eslint-disable-next-line eqeqeq
  if(isVisible){

    return (
      <div id="modal">
          <div id="modal-content">
  
          <h1 style={{color: errorMessage ? "red" : "green" }}
          >{ errorMessage != null ? errorMessage : "the Form has been Submitted Successfully"}</h1>
          </div>
      </div>
    )
  }else(
    <></>
  )
}

export default Modal