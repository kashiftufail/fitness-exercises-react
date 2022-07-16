import React from 'react'

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  return (
    <div>
      {exercises.map((exr,index) => (
        <p>{exr.name}</p>
      ))
      }
      </div>
  )
}

export default Exercises