import React from 'react'

const Task7 = ({set, show}) => {
    function toggleShow(e){
        e.preventDefault()
        if(show){
            set(false)
        } else{
            set(true)
        }
    }
  return (
    <div>
        {show ? <h3 style={{background: "green", color: "white"}}>Dostępny</h3> : <h3 style={{background: "red", color: "white"}}>Niedostępny</h3>}
        <button onClick={(e) => toggleShow(e)}>Klinij mnie</button>
    </div>
  )
}

export default Task7