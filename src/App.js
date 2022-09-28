import React, {useState} from 'react';
import img from './components/bg1.jpg';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light')//weather dark mode is enabled or not
  
  const [alert, setalert] = useState(null);

  const showAlert = (message, type) =>{
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null);
    }, 2000);
  }

  const Img = () => {
    console.log('fff')
    document.body.style.backgroundImage = `url('${img}')` ;
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundSize = 'Cover';
  }

  const blue = () =>{
    document.body.style.backgroundColor ='blue';
  }

  const removeBodyClasses=()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-success')

  }
  
  const toggleMode = (cls) =>{
    removeBodyClasses();
    document.body.classList.add('bg-'+cls)
    if(mode === 'light'){
    setMode('dark');
    document.body.style.backgroundColor = '#042743';
    document.body.style.backgroundImage = 'None' ;
    showAlert("Dark mode has been enabled","success");
 
  }
  else{
    setMode('light');
    document.body.style.backgroundColor = 'white' ;
    showAlert("Light mode has been enabled","success");
  }
  }



  return (
    <>
    <Router>
    <Navbar title="TextUtils" mode={mode} blue={blue} img={Img} toggleMode={toggleMode}/>
    <Alert alert={alert} />
    <div className="container">
    <Routes>
        <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter The Text to Analize" mode={mode}/>}/>
          
        <Route path="/about" element={<About  mode={mode} />} />
         
    </Routes>
   
    
    </div> 
</Router>
    </>
    );
}
export default App; 