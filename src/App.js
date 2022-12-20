import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import ResumeForm from './Pages/Resume Form/ResumeForm';
import Template01 from './Pages/Template01/Template01';

function App() {
  return (
    <div className="App">
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume-form" element={<ResumeForm />} />
        <Route path="/template01" element={<Template01 />} />
      </Routes>
    </div>
  );
}

export default App;
