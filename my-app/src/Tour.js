import React from 'react';
import {useState} from  'react';




const Tour=(props)=>{

    const[text,setText]=useState(false);

    const changeText=()=>{
       
        if(text){
            setText(false);
        }
        else{
            setText(true)
        }
    }





    return (
        <>
         
         <section className="tour-element">
            <img src={props.data.image}></img>
            <section className='price'>
            <h4>{props.data.name}</h4>
            <h4>${props.data.price}</h4>
            </section>
            
           
            <p>{(!text)?props.data.info.substring(0,200)+'...':props.data.info} {<button id="readmore" onClick={()=>{changeText()}}>{(!text)?'readmore':'readless'}</button>}</p>
            
           

            <button className='btn' onClick={()=>{props.changePeople(props.data.id)}}> Not Interested </button>



         </section>


        </>
    )
}


export default Tour;