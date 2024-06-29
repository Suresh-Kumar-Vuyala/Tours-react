import React from 'react';



const Tour=(props)=>{




    return (
        <>
         
         <section className="tour-element">
            <img src={props.data.image}></img>
            <section className='price'>
            <h4>{props.data.name}</h4>
            <h4>${props.data.price}</h4>
            </section>
            <p>{props.data.info}</p>
            <button onClick={()=>{props.changePeople(props.data.id)}}> Not Interested </button>



         </section>


        </>
    )
}


export default Tour;