import Grogu from "./Grogu"


function Board() {
  return (
    <section className="board">
    <div className="cell"><Grogu/></div> {/* mover el div de los pies */}
    <div className="cell"></div>
    <div className="cell"></div>
    <div className="cell"></div>
    <div className="cell"></div>
    <div className="cell"></div>
    <div className="cell"></div>
  </section>
  )
}

export default Board