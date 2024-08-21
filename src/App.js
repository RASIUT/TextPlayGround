import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import Alert from "./Components/Alert";
import About from "./Components/About";
import { useState, useEffect } from 'react';
import {
  BrowserRouter as Router, 
  Route, 
  Routes, 
  Navigate
} from "react-router-dom";

const App = () => {

  const[mode, setmode] = useState("Light Mode");

  const[alert, setalert] = useState(null);

  const[IntervalId, setIntervalID] = useState(null);

  const showAlert = (message, type) => {
    setalert({
      msg: message, 
      type: type
    })
    clearInterval(IntervalId);
    const newIntervalId = setInterval(() => {
      setalert(null);
    }, 1300);
    setIntervalID(newIntervalId);
  }

  const[bodyColor, setbodyColor] = useState({
    backgroundColor: '#FAEED1',
    color:'black'
  })

  const[navbarColor, setnavbarColor] = useState({
    backgroundColor: '#FDF7E4',
    color:'black'
  })
  
  const[TextFormColor, setTextFormColor] = useState({
    backgroundColor: '#DED0B6',
    color: 'black',
    border: 'transparent',
    outline: 'none',
    fontWeight: 'bold',
    fontSize: '20px'
  })

  const toggleMode = () => {
    if (mode === "Light Mode") {
      setmode("Dark Mode");
      document.body.style.backgroundColor = '#1B1A55';
      document.body.style.color = 'white';

      setbodyColor({
        backgroundColor: '#1B1A55',
        color: 'white'
      });

      setnavbarColor({
        backgroundColor: '#070F2B',
        color: 'white'
      });

      setTextFormColor({
        backgroundColor: '#535C91',
        color: 'white',
        border: 'transparent ',
        outline: 'none',
        fontWeight: 'bold',
        fontSize: '20px'
      });

      showAlert("Dark mode has been enabled", "success");

      document.title = "Text_PlayGround (Dark)";
    } else {
      setmode("Light Mode");
      document.body.style.backgroundColor = '#FAEED1';
      document.body.style.color = 'black';

      setbodyColor({
        backgroundColor: '#FAEED1',
        color: 'black'
      });

      setnavbarColor({
        backgroundColor: '#FDF7E4',
        color: 'black'
      });

      setTextFormColor({
        backgroundColor: '#DED0B6',
        color: 'black',
        border: 'transparent ',
        outline: 'none',
        fontWeight: 'bold',
        fontSize: '20px'
      });

      showAlert("Light mode has been enabled", "success");

      document.title = "Text_PlayGround";
    }
  }

  useEffect(() => {
    document.body.style.backgroundColor = bodyColor.backgroundColor;
  }, [bodyColor]);

  return (
    <Router>
      <Navbar mode={mode} toggleMode={toggleMode} navbarColor={navbarColor} />
      <Alert alert={alert} />
      <Routes>
        <Route exact path="/about" element={<About bodyColor={bodyColor} TextFormColor={TextFormColor} />} />
        <Route exact path="/" element={<TextForm bodyColor={bodyColor} TextFormColor={TextFormColor} showAlert={showAlert} />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
