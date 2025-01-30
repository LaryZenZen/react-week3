import { useState } from "react";

let count=0;
function ReactUseState(){
  const [text,setText]=useState('123');
  count++;
  console.log('元件',count);

  const [obj,setObj]=useState({
    name:'小名',
    age:18
  });
  return (
    <>
    <h1>use state</h1>
    <p>{text}</p>
    <input type="text" onChange={(e)=>{
      setText(e.target.value);
    }} />
    <br />
    {JSON.stringify(obj)}
    <button type="button" onClick={()=>{
      setObj({
        ...obj,
        age:19
      })
    }}>按鈕</button>
    </>
  )
}

export default ReactUseState;