import React, {useState} from 'react'


export default function TextForm(props) {
    
    const handelUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted To Upper Case" , "success");
    }
    const handelLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted To Lower Case" , "success");

    }
    const ClearText = ()=>{
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleaned" , "success");

    }
    const handelOnChange = (event)=>{
        setText(event.target.value);
    }
    const [text,setText] = useState('');
    
  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h1 className="mt-5">{props.heading}</h1>
        <div className="mb-3 mt-2">
            <textarea className="form-control" value={text} style={{backgroundColor:props.mode==='dark'?'#13466e':'white',color:props.mode==='dark'?'white':'#042743'}} onChange={handelOnChange} id="MyBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" disabled={text.length===0} onClick={handelUpClick}>Convert To Uppercase</button>
        <button className="btn btn-primary mx-1" disabled={text.length===0} onClick={handelLoClick}>Convert To Lowercase</button>
        <button className="btn btn-primary" disabled={text.length===0} onClick={ClearText}>Clear</button>

    </div>


    <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h1>Your Text Summary</h1>
        <p>{text.split(/\s+/).length-1} words and {text.length} characer</p>
        <p>{0.008*text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter Somthing in the text box above to preview it here !"}</p>
    </div>
    </>
  )
}
