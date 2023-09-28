import React, {useState} from 'react'

export default function TextForm(props) {
    //react Hooks
    const [text, setText] = useState('');

    const handleOnChange = (event)=>{
        // console.log("On change");
        setText(event.target.value);
    }
    const handleUpClick = () => {
        // let newText = text.toUpperCase();
        setText(text.toUpperCase());
        props.showalert("Converted to uppercase!","success");
    }
    const handleLoClick = ()=> {
        setText(text.toLowerCase());
        props.showalert("Converted to lowercase!","success");
    }
    const handleClearTextClick = ()=> {
        setText("");
        props.showalert("Clear text","success");
    }    
    const handleSentenceCaseClick = ()=> {        
        const sentences = text.toLowerCase().split(/(?<=[.!?])\s+/);
        const sentenceCaseString = sentences.map(sentence => sentence.charAt(0).toUpperCase() + sentence.slice(1)).join(' ');
        // console.log(sentenceCaseString);
        setText(sentenceCaseString);
    }
    const handleEncode64Click = () =>{        
        // Encode the sentence to Base64
        const base64Encoded = btoa(text);
        // console.log(base64Encoded);
        setText(base64Encoded)
        props.showalert("Encoded the text","success");
    }
    const handleDecode64Click = () => {
        // Decode the Base64 to sentence
        const decodedString = atob(text);
        // console.log(decodedString);
        setText(decodedString)
        props.showalert("Decoded base64 string","success");
    }

    const handleCapitalizedCaseClick = () => {
        // Decode the Base64 to sentence
        const words = text.split(" ");
        const capitalizedCase = words.map(word => word.charAt(0).toLocaleUpperCase() + word.slice(1)).join(" ");
        // console.log(decodedString);
        setText(capitalizedCase)
    }

    const handleReverseTextClick = () =>{
        let reverse = "";
        for (let i = text.length-1; i >= 0; i--) {
            
            reverse += text[i];            
        }
        setText(reverse)
    }

    const handleCopyText = () =>{
        // let textsdd = document.getElementById("textArea");
        // textsdd.select();
        // textsdd.setSelectionRange(0,999999999999);
        // navigator.clipboard.writeText(textsdd);
        // OR
        navigator.clipboard.writeText(text);
        props.showalert("Copy to clipboard!","success");
    }
    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showalert("Remove extra spaces!","success");
    }

    // const wordsCount = ()=>{
    //     let wordCount = text.split(" ").filter(word => word.trim() !== "").length;
    //     return wordCount;
    // }
   
    // text = "new text"; //wrong way to change the state.
    // setText("New text"); //Correct way to change the state.

  return (
    <div>
        <>
        <div className="container" style={{color: props.mode==="dark"?"white":"#042743"}}>
            <h1>{props.heading}</h1>
            <div className="mb-3"> 
                {/* <label htmlFor="textArea" className="form-label">Example textarea</label> */}
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==="dark"?"gray":"white", color:props.mode==="dark"?"white":"#042743"}} id="textArea" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-1" onClick={handleClearTextClick}>Clear Text</button>
            <button className="btn btn-primary mx-1" onClick={handleSentenceCaseClick}>Sentence Case</button>
            <button className="btn btn-primary mx-1" onClick={handleEncode64Click}>Encode to Base64</button>
            <button className="btn btn-primary mx-1" onClick={handleDecode64Click}>Decode to Base64</button>
            <button className="btn btn-primary mx-1" onClick={handleCapitalizedCaseClick}>Capitalized Case</button>
            <button className="btn btn-primary mx-1" onClick={handleReverseTextClick}>Reverse Text</button>
            <button className="btn btn-primary mx-1" onClick={handleCopyText}>Copy Text</button>
            <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div className="container my-3" style={{color: props.mode==="dark"?"white":"#042743"}}>
            <h2>Your Text summary</h2>
            <p>{text.split(" ").filter(word => word.trim() !== "").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length > 0 ? text : "Enter something in the textbox above to preview it here"}</p>
            
        </div>
        </>
    </div>
  )
}
