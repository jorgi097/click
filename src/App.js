import freeCodeCampLogo from './imagenes/freecodecamp-logo.png';
import './App.css';
import {Boton} from './componentes/Boton'
import {Contador} from './componentes/Contador'
import { useState } from 'react';

function App() {

  const [numClics, setNumClics] = useState(0);

  const manejarClick = () => {
    setNumClics(numClics + 1)
  };
  
  const reiniciarContador = () => {
    setNumClics(0)
  };

  return (
    <div className="App">
      <div className='logo-contenedor'>
        <img 
          className='logo-imagen' 
          src={freeCodeCampLogo}
          alt='Logo freeCodeCamp'
        />
      </div>
      <div className='contenedor-principal'>
        <Contador numClics={numClics}/>
        <Boton 
          texto={'Clic'}
          esBotonDeClick={true}
          manejarClick={manejarClick}
        />
        <Boton 
          texto={'Reiniciar'}
          esBotonDeClick={false}
          manejarClick={reiniciarContador}
        />
      </div>
    </div>
  );
}

export default App;
