
import { useState } from 'react'
import './App.css'

function App() {

  let [counter ,setcounter]= useState(0);

  const increase =()=>{
     if(counter<20){setcounter(counter+1)}
  };

  const decrease=()=>{
    if(counter>0){setcounter(counter-1)}
  };


  return (
    <>
     <h1>Counter</h1>
      <h2>counter value: {counter}</h2>;
      <button onClick={increase}>Increase Counter</button><br />
      <button onClick={decrease}>Decrease Counter</button>
    </>
  )
}

export default App
