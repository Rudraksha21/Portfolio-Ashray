
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      
      {/* <nav>
        Navigation links 
        <Link to="/">Home</Link> | 
        <Link to="/about">About</Link> | 
      </nav>
        */}

        
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </Router>
  );
}

export default App;
