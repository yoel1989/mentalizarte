import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'
import { 
  Menu, 
  X, 
  Phone, 
  Mail, 
  Instagram, 
  Facebook, 
  Linkedin, 
  Youtube
} from 'lucide-react'
import './App.css'

// Import Pages
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Interests from './pages/Interests'
import Contact from './pages/Contact'
import Intranet from './pages/Intranet'

import logoImg from './assets/1.webp'

// Scroll to Top Component
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <Router basename="/mentalizarte">
      <ScrollToTop />
      <div className="app">
        {/* Navigation */}
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
          <div className="container nav-content">
            <Link to="/" className="logo">
              <img src={logoImg} alt="Mentalizarte Logo" className="logo-img" />
            </Link>
            
            <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
              <Link to="/" onClick={() => setIsMenuOpen(false)}>Inicio</Link>
              <Link to="/nosotros" onClick={() => setIsMenuOpen(false)}>Nosotros</Link>
              <Link to="/servicios" onClick={() => setIsMenuOpen(false)}>Servicios</Link>
              <Link to="/interes" onClick={() => setIsMenuOpen(false)}>De interés</Link>
              <Link to="/contacto" onClick={() => setIsMenuOpen(false)}>Contáctanos</Link>
              <a href="https://cpanel4-co.conexcol.net:2083/" target="_blank" rel="noopener noreferrer" className="btn-primary" onClick={() => setIsMenuOpen(false)}>Intranet</a>
            </div>

            <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </nav>

        {/* Page Content */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/nosotros" element={<About />} />
            <Route path="/servicios" element={<Services />} />
            <Route path="/interes" element={<Interests />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="/intranet" element={<Intranet />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="footer">
          <div className="container footer-grid">
            <div className="footer-info">
              <div className="logo">
                <img src={logoImg} alt="Mentalizarte Logo" className="logo-img footer-logo" />
              </div>
              <p className="footer-tagline">Psicología y acompañamiento social online.</p>
            </div>
            
            <div className="footer-contact">
              <h4>Contacto</h4>
              <ul>
                <li><Phone size={16} /> +57 3152936595</li>
                <li><Mail size={16} /> contacto@mentalizarteasesores.co</li>
              </ul>
            </div>

            <div className="footer-contact">
              <h4>Notificaciones</h4>
              <ul>
                <li><Phone size={16} /> +57 300 8053678</li>
                <li><Mail size={16} /> mentalizarteasesores@gmail.com</li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 Mentalizarte Asesores. Todos los derechos reservados.</p>
          </div>
        </footer>

        {/* Floating Social Media Column */}
        <div className="social-float-column">
          <a href="https://www.tiktok.com/@mentalizarte.ases" className="social-float-item tiktok" target="_blank" rel="noopener noreferrer" title="TikTok">
            <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z"/></svg>
          </a>
          <a href="https://www.youtube.com/@mentalizarteasesores" className="social-float-item youtube" target="_blank" rel="noopener noreferrer" title="YouTube">
            <Youtube size={24} />
          </a>
          <a href="https://www.instagram.com/mentalizarteasesores" className="social-float-item instagram" target="_blank" rel="noopener noreferrer" title="Instagram">
            <Instagram size={24} />
          </a>
          <a href="https://www.facebook.com/profile.php?id=61558642898551" className="social-float-item facebook" target="_blank" rel="noopener noreferrer" title="Facebook">
            <Facebook size={24} />
          </a>
          <a href="https://wa.me/573152936595?text=Hola,%20tengo%20una%20consulta%20y%20me%20gustaría%20recibir%20más%20información" className="social-float-item whatsapp" target="_blank" rel="noopener noreferrer" title="WhatsApp">
            <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          </a>
        </div>
      </div>
    </Router>
  )
}

export default App
