import { useEffect, useState } from "react";
import "../styles/App.scss";
import Board from "./Board";
import Header from "./Header";
import Dice from "./Dice";
import Mercancias from "./Mercancias";
import Button from "./Button";

function App() {

 const [status, setStatus] = useState("En curso");
 const [board, setBoard]= useState();
 const [groguPosition, setGroguPosition] = useState(0);

 const [cookies, setCookies] = useState([ "🍪", "🍪", "🍪"]);
 const [eggs, setEggs] = useState([ "🥚", "🥚", "🥚"]);
 const [frogs, setFrogs] = useState([ "🐸", "🐸", "🐸"]);

 useEffect(()=>{
  //Objetivo de useEffect
//El hook useEffect en este caso se utiliza para realizar efectos secundarios en el componente, específicamente para verificar y actualizar el estado del juego cada vez que se actualizan ciertas variables del estado (groguPosition, cookies, eggs, frogs).
  const allGoodsCollected = cookies.length === 0 && eggs.length === 0 && frogs.length === 0;
  //Esta línea verifica si todas las listas de mercancías (cookies, eggs, frogs) están vacías. Si todas tienen longitud 0, significa que todas las mercancías han sido recogidas.
  const groguEnd = groguPosition >= 6;
  //Aquí se verifica si Grogu ha alcanzado o superado la posición 7 en el tablero. Este número 7 es un valor para indicar el final del tablero.
  if (allGoodsCollected) {
    setStatus("¡¡Grogu se ha comido el cargamento!! Has perdido");
  }else if (groguEnd){
    setStatus("¡Ganaste, Mando completa la misión!");
  }
  //Si todas las mercancías han sido recogidas (allGoodsCollected es true), se actualiza el estado status a "¡¡Grogu se ha comido el cargamento!! Has perdido".
//Si Grogu ha llegado al final del tablero (groguReachedEnd es true), se actualiza el estado status a "¡Ganaste, Mando completa la misión!".
 
 } , [groguPosition, cookies, eggs, frogs])
 //El segundo argumento del useEffect es una lista de dependencias. En este caso, hemos proporcionado [groguPosition, cookies, eggs, frogs]. Esto significa que el código dentro del useEffect se ejecutará cada vez que cambie alguna de estas dependencias.

 function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
  }

  //crear variable de estado para el dado
  
//identificar las variables, boton de lanzar dado, en funcion del resultado del dado, sumar uno a grogu o restar de uno de los array de las mercancias
const rollDice = () => {
    const getNumber = getRandomNumber(4);
    console.log(getNumber)
    if (getNumber === 4) {
      console.log("grogu")
      setGroguPosition((position) => position + 1);
    } else if (getNumber === 1) {
      console.log("galleta")
      if (cookies.length > 0){
        const newCookies = [...cookies]
        newCookies.splice(0, 1);
        setCookies(newCookies)
        console.log(newCookies)
      }
     
    } else if (getNumber === 2) {
      if (eggs.length > 0){
        console.log("huevo")
        const newEggs = [...eggs]
        newEggs.splice(0, 1);
        setEggs(newEggs)
        console.log(newEggs)
      }
     
    } else if (getNumber === 3) {
      if(frogs.length > 0){
        console.log("rana")
        const newFrogs = [...frogs]
        newFrogs.splice(0, 1);
        setFrogs(newFrogs)
        console.log(newFrogs)
      }

    }
}

const resetGame = () => {
  setStatus("En curso");
  setGroguPosition(0);
  setCookies(["🍪", "🍪", "🍪"]);
  setEggs(["🥚", "🥚", "🥚"]);
  setFrogs(["🐸", "🐸", "🐸"]);
}
 
  return (
    <>
      <Header />
      <main className="page">
          <Board groguPosition={groguPosition} />

          <section>
            <Dice rollDice={rollDice} /> {/* escuchamos el evento click para lanzar un numero random */}
            <div className="game-status">{status}</div> {/* modificar si esta en curso, has ganado o perdido */}
          </section>

            <Mercancias cookies={cookies} eggs={eggs} frogs={frogs} />
     
          <section>
            <Button resetGame={resetGame}/>
          </section>
      </main>
    </>
  )
}

export default App
