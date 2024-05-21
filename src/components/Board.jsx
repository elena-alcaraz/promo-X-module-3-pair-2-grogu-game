import Cell from "./Cell";

function Board({groguPosition}) {
  const cell = Array(7).fill(null);


  return (

    <div className="board">
      {/* como le damos posicion cero, no puede estar dentro del array, con la _ le damos un número más */} 
      {cell.map((_, index) => (<Cell key={index} groguHere={index === groguPosition}/>))}  
      
    </div>
   
  )
}

export default Board
