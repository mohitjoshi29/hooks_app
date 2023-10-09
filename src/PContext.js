import React, { useContext } from 'react'
// import Context from './App';
import { Context } from './App';


export default function PContext() {
  const conValue = useContext(Context);
  console.log(conValue);
  return (
    <div>
      <h1>i call useContext componnt hook</h1>
      <p>{conValue.data}</p>
    </div>
  )
}
