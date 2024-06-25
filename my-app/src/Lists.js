import React from 'react';
import {useState} from 'react';






const Lists =( {data})=>{

      return (

        <>
        <section>
            <img src={data.image}></img>
              <h1> {data.name}</h1>
        </section>

        </>
      )

      

}

export default Lists;