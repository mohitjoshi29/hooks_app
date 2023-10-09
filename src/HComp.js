import React from 'react'
import {useState,useEffect} from 'react'

export default function HComp() {
    const [val,setVal]=useState(0);
    const [count,setCount]=useState(0);
    
    useEffect(()=>{
        setCount(()=>
            val*5)
    },[val])
  return (
    <>
    <h1>use state count: {val}</h1>
    <button onClick={()=>{setVal(val+1)}}>hooks</button>
    <h1>useeffect count:{count}</h1>
    </>
  )
}
