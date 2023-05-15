import React,{useState} from 'react'

function Hooks()
{
const [Count,setCount]=useState(0)

    return(<div>
        <h1>Hooks in functional Component{Count}</h1>
        <button onClick={()=>{setCount(Count+1)}}>Increment</button>
    </div>)
}
export default Hooks;