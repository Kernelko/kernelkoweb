import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import './App.css';


const App = () => {
  return (
   <Router>
    <div>
      <nav>
        <a href="/">Home</a> | <a href="/projects">Projects</a> | <a href="/contacts">Contacts</a>
      </nav>

      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/projects" element={<Projects />}/>
        <Route path="/contacts" element={<Contact />}/>
      </Routes>
    </div>
   </Router>
  );
}

export default App;
