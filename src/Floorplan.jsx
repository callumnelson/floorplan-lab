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
      <Bedroom bedNum={3}/>
      <Bath size="Half"/>   
    </div>
  )
}

export default FloorPlan