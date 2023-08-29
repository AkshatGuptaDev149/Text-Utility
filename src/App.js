import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";


function App(){
  const [colorMode,setMode]=useState('normal');
  const [sectionStyle,setSection]=useState({});
  const [TxtStyle,setTxtStyle]=useState("text-success");
  const[previewStyle,setPStyle]=useState("text-warning my-3");
  const [btnStyle,setBtnStyle]=useState("btn btn-primary mx-1 my-1");
  const [alertStyle,setAlertStyle]=useState("alert alert-primary");
  const [alert,setAlert]=useState(null);

  
  
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    });
    setTimeout(()=>{setAlert(null)},1500)
  }
  
  const handleMode=()=>{
    if(colorMode=='normal'){
      setMode('Dark');
      setSection({backgroundColor:"#3a3636",color:"white"});
      setBtnStyle("btn btn-warning mx-1 my-1");
      setTxtStyle("text");
      setPStyle("text my-3");
      setAlertStyle("alert alert-warning");
      showAlert('Dark Mode has been enabled','success');
    }
    else{
      setMode('normal');
      setSection({});
      setBtnStyle("btn btn-primary mx-1 my-1 ");
      setTxtStyle("text-success");
      setPStyle("text-warning my-3");
      setAlertStyle("alert alert-primary");
      showAlert('Light Mode has been enabled','primary');
    }
  }
  return (
    <section  style={sectionStyle}>
    
    <Navbar title="TextUtils"/>
    <Alert alert={alert} />
    <li className="position-absolute my-3 top-0 end-0 d-flex flex-row ">
      <a
          className="nav-link active text-white fs-4"
          aria-current="page"
        >
          DarkMode
        </a>
      <div className="form-check form-switch mt-3 mx-2">
        <input className="form-check-input " onClick={handleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
        
      </div>
    </li>
    
    <TextForm showAlert={showAlert} FormHead="Enter the text here to Analyze" BtnStyle={btnStyle} TxtStyle={TxtStyle} previewStyle={previewStyle} alertStyle={alertStyle}/>
     </section>

    
  );
}
export default App;
