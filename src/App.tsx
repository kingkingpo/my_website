import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProjectDetail from './components/ProjectDetail';
import AboutContact from './components/AboutContact';
import Footer from './components/Footer';

export default function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <div className="min-h-screen bg-surface flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Navigate to="/projects" replace />} />
            <Route path="/projects" element={<ProjectDetail />} />
            <Route path="/about" element={<AboutContact />} />
            <Route path="/contact" element={<AboutContact />} />
            {/* Fallback */}
            <Route path="*" element={<Navigate to="/projects" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
