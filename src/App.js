import { Route, Routes } from "react-router-dom";
import './App.css';
import Home from "./Components/Home";
import Login from './Components/Login';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/home' element={<Home/>}/>
    </Routes>
 
    
  );
}

export default App;
