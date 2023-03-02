import React, {useState} from 'react'
import '../styles/App.css';
const App = () => {
//code here 
const [value1,setValue1]=useState("OFF");
const [value2,setValue2]=useState("ON");
const handleClick=()=>{
  if(value1==="OFF"){
 setValue1("ON")
 setValue2("OFF")
  }
  else
  {
    setValue1("OFF")
    setValue2("ON")
  }
}
  

  
  return (
    <div className="App">
      <button id="btn1" onClick={handleClick}>
      {value1}
      </button>
      <br />
      <br />
      <button id="btn2" onClick={handleClick}>
        {value2}
      </button>
    </div>
  );
}


export default App;
