import React, { useState } from 'react';

const Tour = ({id,image,info,price,name,notIntrested}) => {
  // console.log(id,image,info,price,name);
  const [readMore,setReadMore]=useState(false);
  const[tours, setTours]=useState([])

  return (
  <>
  <article className='single-tour'>
     
      <img src={image} alt={name} />
      <footer>
      <div className='tour-info'>
        <h4>{name}</h4>
        <h4 className='tour-prize'>${price}</h4>
     </div>
      <p >{readMore ? `${info}... `: `${info.substring(0,65)}...`}
      <button type='btn' onClick={()=>setReadMore(!readMore)}>{readMore? `Read Less`: `Read More`}</button>
      </p>
      <button type='btn' className='delete-btn' onClick={()=>notIntrested(id)}>Not Intrested</button>
      </footer>
  
  </article>
  </>
  )
 
};

export default Tour;
