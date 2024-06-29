import './App.css';
import {useState,useEffect} from 'react'
import Lists from './Lists'
import Data from './Api-data'
import Tour from './Tour'








function App() {

  const [pData,setPeople]=useState(Data);

  const change=(id)=>{
         const newPeople=pData.filter((A)=>{
              return A.id!==id;
         })    
         setPeople(newPeople)    
  }

  //  function changePeople(id){
  //   const newpeople=pData.filter((A)=>{
  //               return A.id!==id;
  //   })
  //    setPeople(newpeople)
  // }

  // useEffect(()=>{
  //   setPeople(Data)
  // },[])






  return (
    <>
      <section className="body">
        <section className="container">
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
