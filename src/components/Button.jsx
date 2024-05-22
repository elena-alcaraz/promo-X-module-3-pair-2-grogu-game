
function Button({resetGame}) {

    const handleClick = ()=>{
        resetGame()
    }

  return (
    <button className="restart-button" onClick={handleClick}>Reiniciar Juego</button>
  )
}

export default Button