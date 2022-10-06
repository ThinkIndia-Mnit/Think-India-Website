import React from 'react'

function Activity(props) {
  return (
    <div className="timj_activity">

      <img
        className="d-block w-100 activity"
        src={props.src}
        alt="First slide"
      />
    </div>
  )
}

export default Activity