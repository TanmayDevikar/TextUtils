import React, {useState} from 'react'


export default function TextForm (props){
    const [text, setText] = useState('');
    //text = "new text";      Wrong way to change the state
    //setText = "new text";   Correct way to change state

    const handleUpClick = ()=> {
        let temp = text.toUpperCase();
        setText(temp);
        props.showAlert("Converted to Uppercase", "success");
    }

    const handleLowClick = ()=> {
        let temp = text.toLowerCase();
        setText(temp);
        props.showAlert("Converted to Lowercase", "success");
    }

    const handleClear = ()=> {
        setText('');
        props.showAlert("Cleared everything!", "success");
    }

    const handleChange = (event)=> {
        console.log("Changed!");
        setText(event.target.value);
        
    }
    return (
     <>
     <div style={{color: props.mode === 'dark'?'white':'#042743'}}>
      <h1 >{props.heading}</h1>
      <div className="mb-3">
      <textarea className="form-control" value={text} onChange={handleChange} style={{backgroundColor: props.mode === 'dark'?props.back:'white', color: props.mode === 'dark'?'white':'#042743'}} id="exampleFormControlTextarea1" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-2 my-2" disabled={text.length===0} onClick={handleUpClick}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-2 my-2" disabled={text.length===0} onClick={handleLowClick}>Convert to Lowercase</button>
      <button className="btn btn-primary mx-2 my-2" disabled={text.length===0} onClick={handleClear}>Clear</button>
     </div>

     <div className="container my-4" style={{color: props.mode === 'dark'?'white':'#042743'}}>
        <h1>Text Summary</h1>

        <p>Above text has {text.split(/\s+/).filter((element)=>{ return element.length!==0}).length} words and {text.length} characters </p>
        {/* .split(/\s+/) means splitting with regex, \s means any type of white spaces including new lines and + is for one or more*/}
        <p>You will need {(0.008 * text.split(/\s+/).filter((element)=>{ return element.length!==0}).length).toFixed(2)}minutes to read the above text </p>

        <h2>Preview:</h2>
        <p>{text.length>0?text:'Nothing to preview!'}</p>
     </div>
     </>
    )
  }