
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import { CoreJava } from './InterView-Prep/CoreJava';
import { NavBar } from './NavBar';
import { ReactiveProg } from './InterView-Prep/ReactiveProg';
import { Home } from './InterView-Prep/Home';

function App() {
  return (
    
    
    <div className="App">
      {/* <NavBar/> */}
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path="/core" element={<CoreJava/>}/>
      <Route path="/reactive" element={<ReactiveProg/>}/>
      </Routes>
    </BrowserRouter>

    </div>
    
    
  );
}

export default App;
