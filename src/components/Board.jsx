import { useState } from "react"
import Grogu from "./Grogu"


function Board({board}) {
  const boardHtml = board.map((item, index)=> (
    <div key={index} className="cell">
      {item} 
      <Grogu />
       
    </div>
  ));
   
  
  return (
    <section className="board">

      {boardHtml}
     
    </section> 
  )
}

export default Board
