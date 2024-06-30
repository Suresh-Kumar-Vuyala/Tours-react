import './App.css';
import {useState,useEffect} from 'react'
import Lists from './Lists'
import Data from './Api-data'
import Tour from './Tour'








function App() {

  const [pData,setPeople]=useState([]);

  const change=(id)=>{
         const newPeople=pData.filter((A)=>{
              return A.id!==id;
         })    
         setPeople(newPeople)    
  }


  useEffect(()=>{
      setPeople(Data)
  },[])


  const Reset=()=>{
    setPeople(Data)
  }


  return (
    <>
      <section className="body">
        <section className="container">

          {pData.length==0 && <button className='btn' onClick={()=>{Reset()}}>Reset</button>}
{
          pData.map((data)=>{
                
                return (
                  
                  <Tour key={data.id} data={data} changePeople={change}></Tour>
                  
                )
          })

          

        }
          
        

        </section>

      </section>


    </>
  )
}

export default App;
