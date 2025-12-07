import React from 'react'

const Task3 = ({ data }) => {
  return (
    <div>
      <ol>
        {data.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ol>
    </div>
  )
}

export default Task3