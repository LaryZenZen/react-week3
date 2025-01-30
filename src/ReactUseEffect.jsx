import { useEffect, useState } from "react"
import axios from "axios";

let count=0;
function ReactUseEffect(){
  const [text,setText]=useState('123')
  count++;
  console.log('count',count);
  
  useEffect(()=>{
    console.log(document.querySelector('#box'));
  })
  
  useEffect(()=>{
    (async () =>{
      const response = await axios.get('https://randomuser.me/api/')
      console.log(response);
    })();
  },[])
  
  return (
    <>
    {text} <br />
    <input type="text" onChange={(e)=>{
      setText(e.target.value)
    }} />
    <div id="box"></div>
    </>
  )
}

export default ReactUseEffect