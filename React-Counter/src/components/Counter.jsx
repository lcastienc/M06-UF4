import Boton from "./Button";
import { useState } from 'react'

export default function Counter() {
    // Estat del component per al comptador
    const [numClicks, setNumClicks] = useState(0);

    // Función Incremetar Numero Contador
    const incrementNum = () => {
        setNumClicks(numClicks + 1);
        console.log(`Contadorr ha sumado 1, numero actual ${numClicks}`);
    };

    // Función Reiniciar contador
    const reiniciarNum = () => {
        setNumClicks(0);
        console.log('Contador reiniciado');
    };

    return(
        <div >
        <h1>Comptador</h1>
        <p >{numClicks}</p>
        <Boton text="Clic" onClick={incrementNum} esClick={true} />
        <Boton text="Reiniciar" onClick={reiniciarNum} esClick={false} />
      </div>
    );
}