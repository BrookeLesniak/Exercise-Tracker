// import react and useState so I can store which exercise is selected
import React, { useState } from "react"

// import exercise components
import RepetitionExercise from "./components/RepetitionExercise"
import DurationExercise from "./components/DurationExercise"
import RunningExercise from "./components/RunningExercise"

// array of exercises, each has a name and a type (properties)
const exercises = [
  { name: "Push Ups", type: "repetition" },
  { name: "Running", type: "running" },
  { name: "Plank", type: "duration" },
]

function App() {
  // selected stores which exercise the user clicked, setSelected is the function to update the value
  // null means that there is no selected exercise
  const [selected, setSelected] = useState(null)

  // if no exercise is selected, show the menu
  if (selected === null) {
    return (
      <div>
        <h1>To get started pick an Exercise:</h1>

        {/* loop through each exercise and make a button for it */}
        {exercises.map((exercise) => (
          // when clicked, save this exercise to selected
          <button key={exercise.name} onClick={() => setSelected(exercise)}>
            {exercise.name}
          </button>
        ))}
      </div>
    )
  }

  // if an exercise is selected, show its component
  return (
    <div>
      {/* back button sets selected back to null which shows the menu again */}
      <button onClick={() => setSelected(null)}>Back</button>

      
      {selected.type === "repetition"
         ? <RepetitionExercise name={selected.name} />
         : selected.type === "running"
            ? <RunningExercise name={selected.name} />
            : <DurationExercise name={selected.name} />
}
    </div>
  )
}

export default App
