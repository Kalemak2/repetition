import { useState } from 'react'
import './App.css'
import Task1 from './components/Task1'
import Task2 from './components/Task2'
import Task3 from './components/Task3'
import Task4 from './components/Task4'
import Task5 from './components/Task5'
import Task6 from './components/Task6'
import Task7 from './components/Task7'
import Task8 from './components/Task8'
import Task9 from './components/Task9'

function App() {

  const [litera, setLitera] = useState("")

  const [show1, setShow1] = useState([
    {id: 0, value: true},
    {id: 1, value: true},
    {id: 2, value: true},
    {id: 3, value: true},
    {id: 4, value: true},
    {id: 5, value: true},
    {id: 6, value: true},
    {id: 7, value: true},
    {id: 8, value: true}
  ])

  const [show2, setShow2] = useState(true)

  const tab = ["Pierwszy", "Drugi", "Trzeci", "Czwarty", "Piąty"]

  const zwierzeta = [
    {id: 1, name: "Małpa", amount: 5},
    {id: 2, name: "Jaszczurka", amount: 7},
    {id: 3, name: "Wieloryb", amount: 6},
    {id: 4, name: "Pies", amount: 3},
    {id: 5, name: "Szczupak", amount: 4},

  ]

  return (
    <>
      <span>{litera}</span>
      <div className='container'>
          
          {show1[0].value && <Task1/>}
          {show1[1].value &&<Task2 name={"Kornel Pakulski"}/>}
          {show1[2].value &&<Task3 data={tab}/>}
          {show1[3].value &&<Task4 data={zwierzeta} />}
          {show1[4].value &&<Task5 set={setLitera}/>}
          {show1[5].value &&<Task6 set={setShow1}/>}
          {show1[6].value &&<Task7 set={setShow2} show={show2}/>}
          {show1[7].value &&<Task8 data={zwierzeta}/>}
          {show1[8].value &&<Task9/>}
      </div>
    </>
  )
}

export default App
