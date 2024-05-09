/* import { useState } from "react"; */
import "../styles/App.scss";

function App() {

 function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
  }

  
//identificar las variables, boton de lanzar dado, en funcion del resultado del dado, sumar uno a grogu o restar de uno de los array de las mercancias
const handleClick =(event)=>{
    event.preventDefault();
    const getNumber = getRandomNumber(4);
    console.log(getNumber)
    getRandomNumber()
    //condicionales 1= grogu, 2= galleta, 3= huevo, 4= rana
    //si getNumber es igual a 1, se mueve una casilla(div) 
    //si getNumber es igual a 2, se elimina una galleta(div) 
    //si getNumber es igual a 3, se elimina una huevo(div) 
    //si getNumber es igual a 4, se elimina una rana(div) 
  


}
    
   




  return (
    <>
      <header>
        <h1>¡Cuidado con Grogu!</h1>
      </header>
      <main className="page">
          <section className="board">
            <div className="cell"><div className="grogu">👣</div></div> {/* mover el div de los pies */}
            <div className="cell"></div>
            <div className="cell"></div>
            <div className="cell"></div>
            <div className="cell"></div>
            <div className="cell"></div>
            <div className="cell"></div>
          </section>

          <section>
            <button className="dice" onClick={handleClick}>Lanzar Dado</button> {/* escuchamos el evento click para lanzar un numero random */}
            <div className="game-status">En curso</div> {/* modificar si esta en curso, has ganado o perdido */}
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
