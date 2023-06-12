import './App.css';
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Alert from './components/Alert';
import Login from './components/Login';
import Signup from './components/Signup';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
 
} from "react-router-dom";
import NoteState from './context/notes/NotesState';


function App() {
  const [alert, setAlert] = useState(null);
  const showalert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
        setAlert(null);
    }, 1500);
}
  return (
    <>
    <NoteState>
      <Router>
        <Navbar/>
        <Alert alert={alert}/>
        <div className="container">
        <Routes>
        
        <Route exact path="/" element={<Home showalert={showalert}/>} />
        <Route exact path="/about" element={<About/>} />
        <Route exact path="/login" element={<Login showalert={showalert}/>} />
        <Route exact path="/signup" element={<Signup showalert={showalert}/>} />

        {/* <Route exact path="/health" element={<News setProgress={setProgress}  pagesize={10} country="in" key={'health'} category='health'/>} /> */}
        
        </Routes>
        </div>
      </Router>
    </NoteState>
    </>
  );
}

export default App;
