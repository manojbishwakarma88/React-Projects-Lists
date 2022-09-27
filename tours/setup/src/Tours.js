import React from 'react';
import Tour from './Tour';
const Tours = ({tours,notIntrested}) => {
  return(
  <section>
    <div className="title">
        <h2>Our Tours</h2>
        <div className="underline"></div>
    </div>
    <div>
    {tours.map((tour)=>{
        return<Tour key={tour.id} {...tour} notIntrested={notIntrested}></Tour>;
    })}
  </div>
  </section>
 );
};

export default Tours;
