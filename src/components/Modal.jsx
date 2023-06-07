import React from 'react'

function Modal() {
  return (
    <div className={`modal ${modal ? 'active' : ''}`}>
      <p onClick={()=> {setModal(false)}}>close</p>
     </div>
  )
}

export default Modal