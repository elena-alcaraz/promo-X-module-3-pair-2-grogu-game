import { useState } from "react";
import "../styles/App.scss";
import Board from "./Board";
import Header from "./Header";
import Dice from "./Dice";

function App() {

 const [status, setStatus] = useState("En curso");

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
    
    //si getNumber es igual a 1, cambia la variable de estado (se incrementa 1) 
    //si getNumber es igual a 2, se elimina una galleta(div) (splice, eliminar 1 del array)
    //si getNumber es igual a 3, se elimina una huevo(div) 
    //si getNumber es igual a 4, se elimina una rana(div) 
  


}
    
   




  return (
    <>
      <Header />
      <main className="page">
          <Board />

          <section>
            <Dice rollDice={rollDice} /> {/* escuchamos el evento click para lanzar un numero random */}
            <div className="game-status">{status}</div> {/* modificar si esta en curso, has ganado o perdido */}
          </section>

          <section className="goods-container">
            <div className="goods-item">🍪</div> 
            <div className="goods-item">🍪</div>
            <div className="goods-item">🍪</div>
          </section>
          <section className="goods-container">
            <div className="goods-item">🥚</div>
            <div className="goods-item">🥚</div>
            <div className="goods-item">🥚</div>
          </section>
          <section className="goods-container">
            <div className="goods-item">🐸</div>
            <div className="goods-item">🐸</div>
            <div className="goods-item">🐸</div>
          </section>
          <section>
            <button className="restart-button">Reiniciar Juego</button>
          </section>
      </main>
    </>
  )
}

export default App
