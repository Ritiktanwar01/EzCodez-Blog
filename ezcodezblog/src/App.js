import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './Components/Navbar/NavBar';
import Blog from './Components/Blog/Blog';
import CodeSection from './Components/CodeSection/CodeSection';
import Contact from './Components/Contact/Contact';
import { useState } from 'react';

function App() {
  let [dark,setdark] = useState(true)
  let handleClick = ()=>{
    setdark(!dark)
  }
  return (
    <div className={dark?'App':'darkApp'}>
      <BrowserRouter>
      <NavBar click={handleClick} mode={dark}/>
        <Routes>
            <Route element={<Blog mode={dark}/>} path='' />
            <Route element={<CodeSection mode={dark}/>} path='codes' />
            <Route element={<Contact mode={dark}/>} path='contact' />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
