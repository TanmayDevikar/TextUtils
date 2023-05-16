import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';
import React, { useState } from 'react';
import Alert from './Components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {

  const[mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null); 
  const [themeCol, setThemeCol] = useState('#042743');
  const [back, setBack] = useState('#CCC8F5');
  let backColor='';

  const showAlert = (message, type)=> {
    setAlert({
      msg: message,
      type: type
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = ()=> {
    if(mode === 'dark') {
      setMode('light');
      document.body.style.background = 'white';
      showAlert("Light mode has been enabled", "success");
      
    }
    else{
      setMode('dark');
      document.body.style.background = themeCol;
      setBack(backColor);
      showAlert("Dark mode has been enabled", "success");
      // setInterval(() => {
      //   document.title = 'Dark';
      // }, 2000);
      // setInterval(() => {
      //   document.title = 'Tanmay';
      // }, 1500);
    }
  }

  const theme = ()=>{
    let orange = document.getElementById("orange");
    let red = document.getElementById("red");
    let green = document.getElementById("green");

    if(orange.checked){
      setThemeCol('#FAAD2D');
      backColor = '#F7DCAF';
    }
    else if(red.checked){
      setThemeCol('#CD2F08');
      backColor = '#E5BDBC';
    }
    else if(green.checked){
      setThemeCol('#019D0C');
      backColor = '#C4E5BB';
    }
  }
  return (
    <>
    <Router>
      <Navbar title='TextUtils' num={3} mode={mode} toggleMode= {toggleMode} theme={theme}/>
      <Alert alert={alert}/>
      <div className="container my-3">
          <Routes>
            <Route path="/about" element={<About mode={mode} themeCol={themeCol}/>}>
              {/* Its better to write 'exact path = ""'. It will do the exact matching of the path
                  ex: /users or /users/profile  --->  Here exact path will do a better job. */}
            </Route>
            <Route eaxct path="/" element={<TextForm heading='Enter your text' mode={mode} showAlert={showAlert} back={back}/>}>
            </Route>
          </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;