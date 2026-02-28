// import react and useState counter is stored
import React, { useState } from "react"

// name is passed in as a prop from App.js
const RepetitionExercise = ({ name }) => {

  // count is our counter, it starts at 0
  // setCount updates it
  const [count, setCount] = useState(0)

  return (
    <div>
      <h2>{name}</h2>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>
        Complete Rep
      </button>
      <button onClick={() => setCount(0)}>
        Reset
      </button>
    </div>
  )
}

export default RepetitionExercise