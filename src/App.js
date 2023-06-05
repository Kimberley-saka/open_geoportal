
import './App.css';
import NavBar from './NavBar';
import {Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Explore from './pages/Explore';
import About from './pages/About';
import Contact from './pages/contact';


function App() {
  return (
    <>
    <NavBar/>

    <div className='container'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/explore' element={<Explore/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>

      </Routes>

    </div>
    
    </>
    
  );
}

export default App;
