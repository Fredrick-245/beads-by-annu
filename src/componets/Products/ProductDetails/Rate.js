import React, { useState } from 'react'
import {AiFillStar} from 'react-icons/ai'
const Rate = () => {
    const [hoverValue,setHoverValue]=useState(0)
    const stars=Array(5).fill(0)
    function handleClick(i){
        setHoverValue(i)
    }
  return (
    <div>
        {stars.map((_,index)=>(
            <AiFillStar key={index} style={{
                fontSize:'24px',
                cursor:'pointer',
                marginRight:'8px',
                marginTop:'10px',
                marginBottom:'20px',
                color:`${hoverValue>index?'orange':'black'}`
            }} onClick={()=>handleClick(index+1)}/>
        ))}
      
    </div>
  )
}

export default Rate
