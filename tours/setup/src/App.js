import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// import Referesh from './Referesh'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'


function App() {

  const [loading,setLoading]=useState(false);
  const[tours,setTours]=useState([]);
  const notIntrested=(id)=>{
       const newTour=tours.filter(tour=>tour.id!==id);
        setTours(newTour)
          console.log(newTour);
           
       }
     

  
  
  const fetchTour=async()=>{
    setLoading(true)
    try{
      const response=await fetch(url);
      const tours=await response.json();
      console.log(tours)
      setTours(tours)
      setLoading(false)
    }
    catch(error){
      setLoading(false)
      console.log(error);

    }
    
  }
useEffect(()=>{
  fetchTour();
},[])

if(loading){
 return(
  <>
    <main>
        <Loading/>
    </main>
  </>
 )
}
  if(tours.length===0){
              return(
                <main >

                  <div className='title'>                  
                    <h3>No tour left</h3>
                      <button className='btn'  onClick={()=>fetchTour()}> Refresh</button>
                   </div>

                </main>
                 
              )    
      }

  return(
    <>
    <main>
      <Tours tours={tours} notIntrested={notIntrested}  ></Tours>
    </main>
    </>
  )
   
 
}
 
  
  // return <h2>Tours Project Setup</h2>


export default App
