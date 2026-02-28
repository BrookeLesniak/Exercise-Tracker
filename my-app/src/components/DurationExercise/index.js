//https://stackoverflow.com/questions/8043026/how-to-format-numbers-by-prepending-0-to-single-digit-numbers
// import react, useState to store values, useEffect to run code when state changes, useRef to store the timer
import React, { useState, useEffect, useRef } from "react"

// name is passed in as a prop from App.js
const DurationExercise = ({ name }) => {

  // seconds stores how many seconds have passed, starts at 0
  const [seconds, setSeconds] = useState(0)

  // running stores whether the timer is going or not, starts at false
  const [running, setRunning] = useState(false)

  // intervalRef stores timer so it can be stopped
  const intervalRef = useRef(null)

  // useEffect runs this code whenever running changes
  useEffect(() => {
    if (running) {
      // if running is true, start a timer that adds 1 to seconds every 1000ms (1 second)
      intervalRef.current = setInterval(() => {
        setSeconds(s => s + 1)
      }, 1000)
    } else {
      // if running is false, stop the timer
      clearInterval(intervalRef.current)
    }

    //runs when the component is removed (cleans up the timer)
    return () => clearInterval(intervalRef.current)
  }, [running]) // only re-run this when "running" changes

  //stops timer and resets seconds back to 0
  const reset = () => {
    setRunning(false)
    setSeconds(0)
  }

  //formats seconds
  const format = (total) => {
    const mins = Math.floor(total / 60) // get the minutes
    const secs = total % 60 // get remaining seconds
    // padStart makes sure single digits show as 01 instead of 1
    return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`
  }

  return (
    <div>
      <h2>{name}</h2>
      <h1>{format(seconds)}</h1>
      <button onClick={() => setRunning(!running)}>
        {running ? "Pause" : "Start"}
      </button>
      <button onClick={reset}>
        Reset
      </button>
    </div>
  )
}

export default DurationExercise