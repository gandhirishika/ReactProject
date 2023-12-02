import React, { useState } from 'react'
import Questions from './Questions';
import { data } from '../../utils/constant';

const Accordian = () => {
    const [datas,setData] = useState(data);
  return (
    <div className='h-[100%] w-[100%] flex justify-center items-center border-green-800 border-4'>
    <div className='border-2 border-black h-[60%] w-[40%] overflow-scroll'>
      <h1 className='font-bold text-2xl  flex justify-center align-middle'>Accordian</h1>
      {datas.map((question)=>{
        return(
     <Questions id={question.id} {...question}/>
    )})}
    </div>
    </div>
  )
}

export default Accordian
