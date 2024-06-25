import React from 'react';



const Tour=({data})=>{


    return (
        <>
         
         <section className="tour-element">
            <img src={data.image}></img>
            <section className='price'>
            <h4>{data.name}</h4>
            <h4>${data.price}</h4>
            </section>
            <p>{data.info}</p>



         </section>


        </>
    )
}


export default Tour;