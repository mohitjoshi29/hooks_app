import React,{useRef} from 'react'

export default function UseContext() {
    // const [counter,setCounter]= useState('');
    const increment = useRef(0);

    // useEffect(() => {
    // increment.current=increment.current+1;
    // })

    const focusInput=()=>{
        increment.current.focus()
    };
  return (
    <div>
      {/* <input type="number" value={counter} onChange={(e)=>setCounter(e.target.value)}></input> */}
      {/* <h1>counter: {increment.current}</h1> */}
      <input type='text' ref={increment}></input>
      <button onClick={focusInput}>useRef</button>
      <h1>{increment.current}</h1>
    </div>
  )
}
