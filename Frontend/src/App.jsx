import { useState } from "react";
import Navbar from "./Component/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Component/Home";
import About from "./Component/About";
import NoteState from "./Context/Notes/NotesState";
import Alert from "./Component/Alert";
import Login from "./Component/Login";
import SignUp from "./Component/SignUp";
import './App.css'
function App() {
  const [alert, setAlert] = useState(null)
  const showAlert = (massage , type) =>{
    setAlert({
      msg : massage,
      type : type 
    })
    setTimeout(()=>{
      setAlert(null);
    },1500);
  }
  return (
    <>
      <NoteState>
        <Navbar showAlert={showAlert} />
        <Alert alert={alert}/>
        <div className="container">
        <Routes>
          <Route path="/Home" element={<Home showAlert={showAlert}/>} />
          <Route path="/About" element={<About />}/>
          <Route path="/Login" element={<Login showAlert={showAlert}/>} />
          <Route path="/SignUp" element={<SignUp showAlert={showAlert}/>}/>
        </Routes>
        </div>
      </NoteState>
    </>
  );
}

export default App;
