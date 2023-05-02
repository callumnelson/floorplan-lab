

function Bath(props) {

  return (
    <div className={`${props.size.toLowerCase()}-bath`}>
      <h4>{props.size} Bath</h4>
    </div>
  )
}

export default Bath
