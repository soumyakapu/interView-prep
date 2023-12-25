
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import { CoreJava } from './InterView-Prep/CoreJava';
import { NavBar } from './NavBar';

function App() {
  return (
    
    
    <div className="App">
      <NavBar/>
    {/* <BrowserRouter> */}
    <Routes>
      {/* <Route path="/core" element={<CoreJava/>}/> */}
      </Routes>
    {/* </BrowserRouter> */}

    </div>
    
    
  );
}

export default App;
