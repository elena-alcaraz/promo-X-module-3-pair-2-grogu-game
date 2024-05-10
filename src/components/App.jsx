import { useState } from "react";
import "../styles/App.scss";
import Board from "./Board";
import Header from "./Header";

function App() {

 const [status, setStatus] = useState("En curso");
 const [foot, setFoot] = useState("👣");

 const [cookies, setCookies] = useState([ "🍪", "🍪", "🍪"]);
 const [eggs, setEggs] = useState([ "🥚", "🥚", "🥚"]);
 const [frogs, setFrogs] = useState([ "🐸", "🐸", "🐸"]);


 function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
  }

  
  
//identificar las variables, boton de lanzar dado, en funcion del resultado del dado, sumar uno a grogu o restar de uno de los array de las mercancias
const rollDice =(event)=>{
    event.preventDefault();
    const getNumber = getRandomNumber(4);
    console.log(getNumber)
    

    if (getNumber === 4) {
      console.log("grogu")
    } else if (getNumber === 1) {
      console.log("galleta")
    } else if (getNumber === 2) {
      console.log("huevo")
    } else if (getNumber === 3) {
      console.log("rana")
    }
    //condicionales 1= grogu, 2= galleta, 3= huevo, 4= rana
    //si getNumber es igual a 1, se mueve una casilla(div) 
    //si getNumber es igual a 2, se elimina una galleta(div) 
    //si getNumber es igual a 3, se elimina una huevo(div) 
    //si getNumber es igual a 4, se elimina una rana(div) 
  


}
    
   




  return (
    <>
      <Header />
      <main className="page">
          <Board />

          <section>
            <button className="dice" onClick={rollDice}>Lanzar Dado</button> {/* escuchamos el evento click para lanzar un numero random */}
            <div className="game-status">{status}</div> {/* modificar si esta en curso, has ganado o perdido */}
          </section>

          <section className="goods-container">
            <div className="goods-item">🍪</div> {/* array que represente las mercancias existentes */}
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
