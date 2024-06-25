import './App.css';
import {useState} from 'react'
import Lists from './Lists'
import Data from './Api-data'
import Tour from './Tour'








function App() {

  


  return (
    <>
      <section className="body">
        <section className="container">
{
          Data.map((data)=>{
                
                return (
                  
                  <Tour key={data.id} data={data}></Tour>
                  
                )
          })

        }
          
        

        </section>

      </section>


    </>
  )
}

export default App;
