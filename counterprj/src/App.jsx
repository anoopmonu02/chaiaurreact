import { useState } from 'react'
import './App.css'

function App() {
  let [count, setCount] = useState(0)
  let [showMsg, setMsg] = useState("")
  const addValue = () =>{
    if(count<20){
      setCount(count+1)
    } else{
      setMsg("More than 20 not allowed!")
      //showMsg = "More than 20 not allowed!"
    }
    
  }

  const removeValue = () =>{
    if(count>0){
      setCount(count-1)
    } else{
      setMsg("Less than 0 not allowed!")
      //showMsg = "Less than 0 not allowed!"
    }    
  }

  return (
    <>
     <h1>Chai Aur React</h1>
     <h3>Counter Value: {count}</h3>
     <h6>{showMsg}</h6>
     <button onClick={addValue}>Add Val</button>
     <button onClick={removeValue}>Remove Val</button>
    </>
  )
}

export default App
