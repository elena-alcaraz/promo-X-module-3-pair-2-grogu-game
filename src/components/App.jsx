import { useState } from "react";
import "../styles/App.scss";
import Board from "./Board";
import Header from "./Header";
import Dice from "./Dice";
import Mercancias from "./Mercancias";

function App() {

 const [status, setStatus] = useState("En curso");
 const [board, setBoard]= useState(Array(7).fill(null));
 const [foot, setFoot] = useState(["👣"]);

 const [cookies, setCookies] = useState([ "🍪", "🍪", "🍪"]);
 const [eggs, setEggs] = useState([ "🥚", "🥚", "🥚"]);
 const [frogs, setFrogs] = useState([ "🐸", "🐸", "🐸"]);


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
      //setFoot() > cambiar la posición del índice (sumarle 1)
    } else if (getNumber === 1) {
      console.log("galleta")
      const newCookies = [...cookies]
      newCookies.splice(0, 1);
      setCookies(newCookies)
      console.log(newCookies)
    } else if (getNumber === 2) {
      console.log("huevo")
      const newEggs = [...eggs]
      newEggs.splice(0, 1);
      setEggs(newEggs)
      console.log(newEggs)
    } else if (getNumber === 3) {
      console.log("rana")
      const newFrogs = [...frogs]
      newFrogs.splice(0, 1);
      setFrogs(newFrogs)
      console.log(newFrogs)
    }
}
 
  return (
    <>
      <Header />
      <main className="page">
          <Board board={board} />

          <section>
            <Dice rollDice={rollDice} /> {/* escuchamos el evento click para lanzar un numero random */}
            <div className="game-status">{status}</div> {/* modificar si esta en curso, has ganado o perdido */}
          </section>

            <Mercancias cookies={cookies} eggs={eggs} frogs={frogs} />
     
          <section>
            <button className="restart-button">Reiniciar Juego</button>
          </section>
      </main>
    </>
  )
}

export default App
