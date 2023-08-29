import React,{useState} from "react";
import PropTypes from 'prop-types';

export default function TextForm(props) {
    const [text,setText]=useState('')
    const handleUpClick=()=>{
        setText(text.toUpperCase());
    }
    const handleLowClick=()=>{
        setText(text.toLowerCase());
    }
    const handleCopy=()=>{
      props.showAlert('Text is copied to clipboard','success')
        navigator.clipboard.writeText(text);
    }
    const handleCapitalize=()=>{
        let arr=text.split('.');
        let temp='';
        for(let i in arr){
          temp+=(arr[i].charAt(0).toUpperCase())+(arr[i].slice(1,arr[i].length)+'.');
        }
        setText(temp);
    }
    
    const handleExtraSpace=()=>{
        let newTxt=text.split(/[ ]+/);
        setText(newTxt.join(" "))
    }
    const handleClear=()=>{
        props.showAlert('Text is Cleared',"danger")
        setText('');
    }
    const handleOnChange=(event)=>{
        setText(event.target.value);
    }
  
  
    return (
    <>
      <div className="container-fluid my-5">
      <div className=" my-3 ">
        <h1 className="form-label "> {props.FormHead} </h1>
        <textarea   className="form-control my-2" id="exampleFormControlTextarea1" rows="8" value={text} onChange={handleOnChange}></textarea>
      </div>
      <button className={props.BtnStyle} onClick={handleUpClick}>Convert to UpperCase</button>
      <button className={props.BtnStyle} onClick={handleLowClick}>Convert to LowerCase</button>
      <button className={props.BtnStyle} onClick={handleCapitalize}>Capitalize</button>
      <button className={props.BtnStyle} onClick={handleExtraSpace}>RemoveExtraSpaces</button>
      <button className="btn btn-success mx-1" onClick={handleCopy}>Copy to Clipboard</button>
      <button className="btn btn-danger mx-1" onClick={handleClear}>Clear Text</button>
      </div>
      <div className="container-fluid my-4">
        <h1 className={props.TxtStyle}>Text Summary</h1>
        <p className={props.alertStyle}><b>{text===''? (0):(text.split(' ').length)}</b> words And <b>{text.length}</b> characters.</p>
        <p className={props.alertStyle}>Require <b>{0.008* (text===''? (0):(text.split(' ').length))}</b> minutes to read on average</p>
        <h1 className={props.previewStyle} >Preview</h1>
        <p className="alert alert-secondary">{text}</p>
        </div>

    </>
  );
}

TextForm.propTypes={FormHead:PropTypes.string.isRequired, BtnStyle:PropTypes.string.isRequired, TxtStyle:PropTypes.string, previewStyle:PropTypes.string, alertStyle:PropTypes.string};
TextForm.defaultProps={FormHead:"Analyze your Text here",BtnStyle:"btn btn-primary mx-2",TxtStyle:"text-success",previewStyle:"text-warning my-3", alertStyle:"alert alert-primary"}

