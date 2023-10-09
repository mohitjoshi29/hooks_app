import './App.css';
import HComp from './HComp';
import React,{createContext} from 'react';
import PContext from './PContext';

const Context= createContext();
function App() {
  return (
    <>
    {/* <HComp/>
    <UseContext/> */}
    <Context.Provider value={{data:"hello my name is mohit"}}>
      <PContext/>
    </Context.Provider>
    </>
  );
}

export default App;

export {Context};
