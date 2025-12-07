import React, { useState } from 'react'

const Task8 = ({data}) => {
    const [nowaZwierz, setNowaZwierz] = useState(data)
        
    function handleClick(id){
        setNowaZwierz(nowa => nowa.map((item) =>{
            if(item.id == id){
                const newValue = item.amount > 0 ? item.amount - 1 : 0;
                return {...item, amount: newValue}
            }
            return item;
    }))}
    
    return (
        <div>
            {nowaZwierz.map((item) =>(
                <button key={item.id} onClick={() => handleClick(item.id)}>{item.name + "("+item.amount+")"}</button>
            ))}
        </div>
    )
}


export default Task8