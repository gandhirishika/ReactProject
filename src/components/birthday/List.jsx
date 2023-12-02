import React from 'react'

const List = ({people}) => {
  return (
    <div className=''>
      {people.map((person)=>{
        const {id,name,img}=person;
       return( <div className='flex'>
        
        <h1 key="index">{name}</h1>
        <img className='rounded-full h-20' src={img} alt="loading"/>
        </div>)
})}
    </div>
  )
}

export default List;
