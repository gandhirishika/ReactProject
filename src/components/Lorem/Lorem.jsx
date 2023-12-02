import React, { useState } from 'react'
import text from '../../utils/text';
const Lorem = () => {
    const [count,setCount] = useState(0);
    const [texts,setTexts]= useState([]);
    const handleSubmit = (e) =>{
        e.preventDefault();
        let amount= parseInt(count);

        if(count<=0)
        amount=1;
        if(count>8)
        amount=8;

        setTexts(text.splice(0,amount));
    }
    
  return (
    <div>
        <h1>Lorem Ipsum Generator!</h1>
        <form onSubmit={handleSubmit}>
            <input type="number" value={count} onChange={(e)=>setCount(e.target.value)}/>
             <button>Generate</button>
        </form>
      {texts.map((item,index)=>{return <p key="index">{item}</p>})}
    </div>
  )
}

export default Lorem
