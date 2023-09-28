
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
 Routes,
  Route,
  // Link
} from 'react-router-dom';

function App() {
  const [mode, setMode] = useState("light"); // Whether dark mode is enabled or not.
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg:message,
      type:type
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = ()=>{
    if (mode === 'light') {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      // document.body.style.color = "white";
      showAlert("Dark mode has been enabled","success");
      document.title = "TextUtils - Dark mode";

      // setInterval(() => {
      //   document.title = "TextUtils is amazing mode";
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Install TextUtils now";
      // }, 1500);

    }else{
      setMode("light");
      document.body.style.backgroundColor = "white";
      // document.body.style.color = "black";
      showAlert("Light mode has been enabled","success");
      document.title = "TextUtils - Light mode";
    }
  }

  // const redhemeColor = () => {
  //   document.body.style.backgroundColor = "red";

  // }

  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert}/>
        <div className="container my-3">

          {/* Note: react path e 'exact' na likle partial match kore. tai exact mandatory.
          /about  --> component 1
          /about/partOne --> component 1 */}

          <Routes>
            <Route exact path='/about' element={<About/>}/>
          </Routes>
          <Routes>
            <Route exact path='/' element={<TextForm showalert={showAlert} heading="Enter the text to analyze below" mode={mode}/>}/>
          </Routes>
            {/* <Route path='/'>
              <TextForm showalert={showAlert} heading="Enter the text to analyze below" mode={mode}/>
            </Route> */}
        </div>
      
      </Router>
    </>
  );
}

export default App;
