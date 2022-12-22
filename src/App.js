
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import ResumeForm from './Pages/Resume Form/ResumeForm';
import Template01 from './Pages/Template01/Template01';
import Templates from './Pages/Templates/Templates';
import ParticleBackground from './Components/ParticleBackground';
function App() {
  return (
    <>
      <ParticleBackground/>
    <div className="App">
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume-form" element={<ResumeForm />} />
        <Route path="/templates" element={<Templates />} />

        <Route path="/template01" element={<Template01 />} />
      </Routes>
    </div></>
  );
}

export default App;
