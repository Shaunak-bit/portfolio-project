import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Builder from './pages/Builder';
import Projects from './pages/Projects';
import Chatbot from './components/Chatbot';
import About from './pages/about.jsx';
import Contact from './pages/contact.jsx';
import ResumeBuilder from './components/Resumebuilder'; // Add this import

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/builder" element={<Builder />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume-builder" element={<ResumeBuilder />} /> {/* Add this route */}
      </Routes>
    </Router>
  );
}

export default App;
