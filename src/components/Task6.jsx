import React from 'react'

const Task6 = ({set}) => {
    function handleClick(id){
    set(show => show.map((item) =>{
        if(item.id == id){
            return {...item, value: false}
        }
        return item;
    }))
  }
  return (
    <div>
        <button onClick={() => handleClick(0)}>Ukryj 1 komponent</button>
        <button onClick={() => handleClick(1)}>Ukryj 2 komponent</button>
        <button onClick={() => handleClick(2)}>Ukryj 3 komponent</button>
        <button onClick={() => handleClick(3)}>Ukryj 4 komponent</button>
        <button onClick={() => handleClick(4)}>Ukryj 5 komponent</button>
        <button onClick={() => handleClick(5)}>Ukryj 6 komponent</button>
        <button onClick={() => handleClick(6)}>Ukryj 7 komponent</button>
        <button onClick={() => handleClick(7)}>Ukryj 8 komponent</button>
        <button onClick={() => handleClick(8)}>Ukryj 9 komponent</button>
    </div>
  )
}

export default Task6