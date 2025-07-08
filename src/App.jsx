import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import DoctorPage from './pages/DoctorPage';
import MapComponent from './components/MapComponent';
import FindDoctor from './pages/FindDoctor';


export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
          <Route path="/" element={<Home />} />
        <Route path="/find-doctor" element={<FindDoctor />} />
        <Route path="/doctor/:id" element={<DoctorPage />} />
        <Route path="/map" element={<MapComponent />} />
      </Routes>
      <Footer />
    </Router>
  );
}



