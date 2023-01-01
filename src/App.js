
import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './Pages/Home/Home';
import ResumeForm from './Pages/Resume Form/ResumeForm';
import Template01 from './Pages/Template01/Template01';
import Templates from './Pages/Templates/Templates';
import ParticleBackground from './Components/ParticleBackground';
import { AnimatePresence } from 'framer-motion';
import Transition from './Components/Transition/Transition';
import Signin from './Pages/Signin/Signin';
import Signup from './Pages/Signup/Signup';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from 'react-toastify';
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute';
import GuestRoute from './Components/GuestRoute/GuestRoute';
import Navbar from './Components/Navbar/Navbar';
import AllResumes from './Pages/AllResumes/AllResumes';
import Loader from './Pages/Loader/Loader';
function App() {
  const location = useLocation();
  return (
    <>

    
      <ParticleBackground/>
      <ToastContainer />

      <Navbar></Navbar>
    <div className="App">
      {/* //exitbefore hataya he yahan se  */}
      <AnimatePresence>

        <Routes key={location.pathname} location={location}>
        <Route path="/" element={<Transition><ProtectedRoute><Home /></ProtectedRoute></Transition>} />
        <Route path="/resume-form" element={<Transition><ProtectedRoute><ResumeForm /></ProtectedRoute></Transition>} />
        <Route path="/templates" element={<Transition><ProtectedRoute><Templates /></ProtectedRoute></Transition>} />
        <Route path="/my-resumes" element={<Transition><ProtectedRoute><AllResumes /></ProtectedRoute></Transition>} />

        <Route path="/sign-in" element={<GuestRoute><Signin /></GuestRoute>} />
        <Route path="/sign-up" element={<GuestRoute><Signup /></GuestRoute>} />
      </Routes>
      </AnimatePresence>

    </div></>
  );
}

export default App;
