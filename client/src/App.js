import { HashRouter, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import './App.css';
import Home from './Pages/Home/Home';
import Water from './Pages/Water/Water';
import Ice from './Pages/Ice/Ice';
import Why from './Pages/Why/Why';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';


function App() {
  return (
    <div className="App">
      <HashRouter 
        future={{
        v7_relativeSplatPath: true, 
        v7_startTransition: true,
        }}>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/water-coolers' element={<Water/>}/>
          <Route path='/ice-machines' element={<Ice/>}/>
          <Route path='/why-choose-us' element={<Why/>}/>
          <Route path='/about-us' element={<About/>}/>
          <Route path='/contact-us' element={<Contact/>}/>
        </Routes>
      </HashRouter>
      <ToastContainer/>
    </div>
  );
}

export default App;
