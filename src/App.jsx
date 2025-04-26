import React from "react";
import { useState } from "react";

const App = ()=>{
  const [count, setCount]=useState(0)
  return(
    <div className="min-h-screen min w-screen bg-teal-600">
      <div className="flex flex-col justify-center items-center h-screen py-40 px-80 ">
        <h1 className="text-4xl font-semibold bg-white py-2 px-4 rounded-2xl animate-pulse">COUNTER APP</h1>
        <h3 className="my-6 text-6xl font-semibold">{count}</h3>
        <div>
        <button className="font-semibold text-4xl bg-white text-black w-20 h-20
          rounded-full m-4 mt-10" onClick={()=>setCount(count+1)}>+</button>
        <button className="font-semibold text-4xl bg-white text-black w-20 h-20
          rounded-full m-4 mt-10" onClick={()=>setCount(0)}>0</button>
        <button className="font-semibold text-4xl bg-white text-black w-20 h-20
          rounded-full m-4 mt-10" onClick={()=>setCount(count-1)}>-</button>
        </div>
      </div>
   </div>
  
  )
}
export default App