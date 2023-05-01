import Kitchen from "./Kitchen.jsx"
import LivingRoom from "./LivingRoom.jsx"
import Bedroom from "./Bedroom.jsx"
import Bath from "./Bath.jsx"

function FloorPlan() {

  return (
    <div className="floorplan">
      <Bedroom bedNum={1}/>   
      <Kitchen />
      <Bath size="Full"/>   
      <Bedroom bedNum={2}/>   
      <LivingRoom />
      <Bath size="Half"/>   
      <Bedroom bedNum={3}/>
    </div>
  )
}

export default FloorPlan