import React from 'react'
import { useEffect,useState } from 'react'
const TestPage = () => {
    const [count,setCount]=useState(0)
    useEffect(()=>{
        console.log(count)
    },[count])
  return (
    <div>
        <button onClick={()=>setCount(count+1)}>Click </button>
    </div>
  )
}

export default TestPage