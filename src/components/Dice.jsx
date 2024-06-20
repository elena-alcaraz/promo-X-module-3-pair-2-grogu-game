

const Dice = (props) => {

    const handleClick = (event) => {
        event.preventDefault()
        props.rollDice()
    }

  return (
    
    <button className="dice" onClick={handleClick}>Lanzar Dado
    <div>🎲</div>
    <div className="diceResult">El dado lanzó... {props.diceValue}</div>
    </button>
    
  )
}

export default Dice