import React, { useState } from 'react';
import data from './data';
function App() {
  const [count,setCount]=useState(0);
  const[text,setText]=useState([]);
  

  const submitform=(e)=>{
    e.preventDefault();
   
    let amt=parseInt(count)
    let sliceData=data.slice(0,amt);
    console.log(amt);
    console.log('Connected', typeof amt);
    if(amt>=0){
       sliceData=data.slice(0,amt)
      // setText(sliceData)
      // console.log(data);
      // console.log(sliceData);
    }
    if(amt<=0 ){
      sliceData=data.slice(0,1)
        
    }
    if(amt>data.length){
      sliceData=data.slice(0,amt);
    }
    setText(sliceData);
    
  }

  return (
    <section className='section-center'>
    <h3>Lorem Ipsum Updated</h3>
    <form className='lorem-form'  onSubmit={submitform}>
  
  <label htmlFor="amount">paragraphs:</label>
  <input 
  type="number"  
  name='amount' 
  id='amount' 
  value={count}
  onChange={(e)=>setCount(e.target.value)}
  />
  <button className='btn' type='submit'> Submit</button>
  </form>
  <article className='lorem-text'>
   {
    text.map((item,index)=>{
      return(
        <>
        <p key={index}> {item} </p>
        </>
      )
    })
   }

  </article>
  </section>
  
    )

}

export default App;
