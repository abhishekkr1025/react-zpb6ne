import React,{useState} from "react";
import "./style.css";

function App(){
  const[text,setText] = useState('Enter text to here')
  const handleChange = (e) => {

    setText(e.target.value);
  }
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText)
    
  }
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText)
    
  }
return(
<div className = "App">
<h1>Convert Text</h1>
<h2>Enter Text here: </h2>
<textarea value = {text} onChange = {handleChange} cols="30" rows="10"></textarea><br/><br/>
<button onClick = {handleUpClick}>To UpperCase</button><br/><br/>
<button onClick = {handleLoClick}>To LowerCase</button>
</div>

);
}

export default App;