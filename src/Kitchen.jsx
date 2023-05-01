import Oven from "./Oven.jsx"
import Sink from "./Sink.jsx"

function Kitchen() {

  return (
    <div className="kitchen">
      <div className="label-wrapper">
        <h4>Kitchen</h4>
      </div>
      <div className="appliance-wrapper">
        <Oven />
        <Sink />
      </div>
    </div>
  )
}

export default Kitchen
