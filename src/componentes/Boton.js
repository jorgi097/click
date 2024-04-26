import React from 'react';
import '../styles/boton.css'

export function Boton({ texto, esBotonDeClick, manejarClick }){
    return(
      <button
        className={esBotonDeClick ? 'boton-clic' : 'boton-reiniciar'}
        onClick={manejarClick} >
        {texto}
      </button>
    )
}

