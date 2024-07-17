
import { Route, Routes } from 'react-router-dom';

import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import About from './pages/About/About';
import Blog from './pages/Blog/Blog';
import Contact from './pages/Contact/Contact'

import ParticlesBackground from './Components/ParticlesBackground';
import Testimoial from './pages/Testimonial/Testimoial';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <>
      <Header />
      <Home />
      <About />
      <Blog />
      <Testimoial />
      <Contact />
      <Footer />
      {/* <Routes>
        <Route path='*' exact element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/testimonial' element={<Testimoial />} />
        <Route path='/contact' element={<Contact />} /> 
      </Routes> */}
      </>
    </div>
  );
}

export default App;
