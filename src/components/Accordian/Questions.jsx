import React, { useState } from 'react'

const Questions = ({name,info}) => {
    const [show,setShow] = useState(false);
  return (
    <div className='flex justify-center align-middle'>
      <h1>{name}</h1><button onClick={()=>setShow(!show)}>{show?"-":"+"}</button>
      {show &&<p>{info}</p>}
    </div>
  )
}

export default Questions
