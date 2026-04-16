import { useState, useEffect } from 'react'
import { Instagram, Youtube, Facebook, ChevronLeft, ChevronRight } from 'lucide-react'
import interes1 from '../assets/DE INTERES.webp'
import interes2 from '../assets/DE INTERES2.webp'
import interes3 from '../assets/DE INTERES3.webp'
import interes4 from '../assets/DE INTERES4.webp'
import interes5 from '../assets/DE INTERES5.webp'
import interes6 from '../assets/DE INTERES6.webp'

function LazyYoutube({ videoId, title }: { videoId: string; title: string }) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      })
    }, { rootMargin: '100px' })

    const element = document.getElementById(`video-${videoId}`)
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [videoId])

  return (
    <div id={`video-${videoId}`}>
      {isVisible ? (
        <div className="video-container-wrapper">
          <div className="video-aspect-ratio">
            <iframe 
              src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`} 
              title={title}
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
        </div>
      ) : (
        <div className="video-container-wrapper video-placeholder" onClick={() => setIsVisible(true)} style={{ cursor: 'pointer' }}>
          <div className="video-aspect-ratio">
            <img 
              src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`} 
              alt={title}
              loading="lazy"
              style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0 }}
            />
            <div className="play-button-overlay">
              <svg viewBox="0 0 24 24" fill="white" width="60" height="60">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

function Interests() {
  const interesItems = [
    { image: interes1, title: "La Familia: Vínculos que Nos Unen" },
    { image: interes2, title: "¿Qué es la Familia?" },
    { image: interes3, title: "El Corazón de Nuestra Comunidad" },
    { image: interes4, title: "Celebrando la Diversidad Familiar" },
    { image: interes5, title: "Pedir Ayuda es un Acto de Valentía" },
    { image: interes6, title: "Mentalizarte Asesores" }
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % interesItems.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [interesItems.length])

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % interesItems.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + interesItems.length) % interesItems.length)
  }

  return (
    <div className="interests-page" style={{ paddingTop: '160px', paddingBottom: '100px' }}>
      <div className="container">
        <div className="section-header">
          <h2>Contenido de interés</h2>
          <p className="section-description">Aquí podrás encontrar múltiples materiales de apoyo disponibles en TODAS nuestras redes sociales que te ayudarán a obtener tips que beneficien tu salud mental y mantener tus entornos saludables.</p>
        </div>

        {/* Video Section */}
        <div className="video-section" style={{ marginTop: '60px', marginBottom: '80px' }}>
          <LazyYoutube videoId="L1CiVUCr9oo" title="Mentalizarte Asesores" />
        </div>

        {/* Slider Section */}
        <div className="slider-section">
          <div className="slider-container">
            <div className="slider-track" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
              {interesItems.map((item, index) => (
                <div key={index} className="slider-slide">
                  <img src={item.image} alt={item.title} />
                  <div className="slider-caption">
                    <h3>{item.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button className="slider-arrow left" onClick={prevSlide}>
            <ChevronLeft size={40} />
          </button>
          <button className="slider-arrow right" onClick={nextSlide}>
            <ChevronRight size={40} />
          </button>

          {/* Dots */}
          <div className="slider-dots">
            {interesItems.map((_, index) => (
              <button
                key={index}
                className={`slider-dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>

        {/* Social Networks */}
        <div className="social-section" style={{ marginTop: '80px', textAlign: 'center' }}>
          <h3>Síguenos en redes sociales</h3>
          <div className="social-links-grid">
            <a href="https://www.instagram.com/mentalizarteasesores" target="_blank" rel="noopener noreferrer" className="social-link instagram-link">
              <Instagram size={24} />
              <span>Instagram</span>
            </a>
            <a href="https://www.youtube.com/@mentalizarteasesores" target="_blank" rel="noopener noreferrer" className="social-link youtube-link">
              <Youtube size={24} />
              <span>YouTube</span>
            </a>
            <a href="https://www.tiktok.com/@mentalizarte.ases" target="_blank" rel="noopener noreferrer" className="social-link tiktok-link">
              <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z"/></svg>
              <span>TikTok</span>
            </a>
            <a href="https://www.facebook.com/share/15MP8wKoXh/" target="_blank" rel="noopener noreferrer" className="social-link facebook-link">
              <Facebook size={24} />
              <span>Facebook</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Interests
