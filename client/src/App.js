
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import About from './pages/About/About';
import Blog from './pages/Blog/Blog';
import Contact from './pages/Contact/Contact'
import Login from './pages/Login/Login';
import Register from './pages/Register/Register'
import ParticlesBackground from './Components/ParticlesBackground';

function App() {
  return (
    <div className="App">
      
      <Header />
      <ParticlesBackground />
      <Routes>
        <Route path='*' exact element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/contact' element={<Contact />} /> 
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
