import Grogu from "./Grogu";

const Cell = ({groguHere}) => {
  return (
    <div className="cell">{groguHere && <Grogu />}</div>
  )
}

export default Cell