import React ,  { useState } from 'react';
import CreateArea from "./CreateArea.jsx";
import Vlog from "./vlog.jsx";
import Header from "./header.jsx";
import Footer from "./footer.jsx";

function App() {
  const[values,setvalues]=useState([]);

  const addValue = (newValues)=>{
    setvalues(preValues =>{
      return[...preValues,newValues]
    });
  }

  return (
    <div>
    <Header />
      <CreateArea onAdd={addValue} />
      {values.map((valueItem,index)=>{
        return(
          <Vlog 
            key={index}
            id={index}
            title={valueItem.title}
            content={valueItem.content}
          />
        );
      })}
      <Footer />
    </div>
  )


}

export default App
