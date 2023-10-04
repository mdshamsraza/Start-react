import { useState } from 'react'
import './App.css'

function App() {

  let [Counter, setCounter] = useState(0)
  // let Counter = 15
const Addvalue = () =>{
  // console.log("added value: ",Math.random())
  // Counter = Counter + 1
  setCounter(Counter + 1)
}
while(Counter==0){
const removeValue = ()=>{
  setCounter(Counter - 1)
}
}
  return (
    <>
    <h1>This is react</h1>
    <h2>Counter Value:{Counter}</h2>

    <button onClick={Addvalue}>Add value = {Counter}</button>
    <br/>
    <br/>
    <button onClick={removeValue}>Remove value = {Counter}</button>
    </>
  )
}
export default App
