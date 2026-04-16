import { useState, useEffect } from 'react'
import { ArrowRight, Award, Users, MessageSquare, ShieldCheck, Monitor, Globe } from 'lucide-react'
import heroImg from '../assets/1.webp'
import adrianaImg from '../assets/adriana.webp'
import andresImg from '../assets/andres.webp'
import lauraImg from '../assets/laura.webp'

function Home() {
  const whyChooseUs = [
    {
      title: "Profesionales certificados",
      description: "Nuestros profesionales se encuentran capacitados y tienen amplia experiencia en su campo de atención.",
      icon: <Award className="icon" />,
      color: "var(--primary-cyan)"
    },
    {
      title: "Atención personalizada",
      description: "Cada paciente es único, por ello; en cada atención contarás con una atención diseñada para ti.",
      icon: <Users className="icon" />,
      color: "var(--accent-purple)"
    },
    {
      title: "Contenido educativo",
      description: "En nuestras redes sociales, encontrarás contenido de calidad para mejorar tu día a día en Salud Mental y entornos saludables.",
      icon: <MessageSquare className="icon" />,
      color: "#ff9a8b"
    },
    {
      title: "Confidencialidad",
      description: "Todos tus datos estarán bajo el más estricto secreto profesional, cada atención goza de la ética profesional de nuestro talento humano.",
      icon: <ShieldCheck className="icon" />,
      color: "#4facfe"
    },
    {
      title: "Tecnología en atención",
      description: "Nuestros profesionales cuentan con técnicas de última generación para la atención de los pacientes.",
      icon: <Monitor className="icon" />,
      color: "#00f2fe"
    },
    {
      title: "Atención virtual",
      description: "Te atendemos en cualquier parte que te encuentres y nos tienes al alcance de tu mano para atenderte cuando lo necesites.",
      icon: <Globe className="icon" />,
      color: "#667eea"
    }
  ]

  const team = [
    {
      name: "Adriana Rojas",
      role: "Psicóloga clínica y Mg. en Terapia Sistémica",
      description: "Psicóloga clínica, especializada en terapia sistémica y terapias de tercera generación. Su práctica se centra en la asesoría individual y familiar, ofreciendo un enfoque comprensivo y empático en cada consulta.",
      image: adrianaImg,
      position: "top"
    },
    {
      name: "Andrés Vásquez",
      role: "Trabajador Social",
      description: "Trabajador Social con una extensa experiencia en la atención a diversos grupos etarios en áreas como salud, restablecimiento de derechos, atención a población de alta vulnerabilidad y gestión de crisis.",
      image: andresImg,
      position: "top"
    },
    {
      name: "Laura Uyazán",
      role: "Trabajadora Social y Mg. en Responsabilidad Social",
      description: "Trabajadora Social con una destacada trayectoria en la atención de proyectos comunitarios, especialmente dirigidos a poblaciones vulnerables. Su formación como Magíster en Responsabilidad Social y Sostenibilidad le proporciona una perspectiva integral.",
      image: lauraImg,
      position: "top"
    }
  ]

  return (
    <div className="home-page">
      {/* Hero Section */}
      <header className="hero">
        <div className="container hero-content">
          <div className="hero-text">
            <h1>Consultorio Psicosocial al alcance de tus manos.</h1>
            <h2 className="hero-subtitle">Porque tu Salud Mental Importa</h2>
            <p>Tenemos profesionales en Psicología y Trabajo Social para ti, tu familia y tu empresa o comunidad, listos para asesorar temas de Salud Mental y Entornos Saludables.</p>
            <div className="hero-btns" style={{ position: 'relative', zIndex: 10 }}>
              <a 
                href="https://wa.me/573152936595?text=Hola,%20tengo%20una%20consulta%20y%20me%20gustaría%20recibir%20más%20información" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-primary-large"
                style={{ cursor: 'pointer', display: 'inline-flex' }}
              >
                Agenda tu cita <ArrowRight size={20} />
              </a>
            </div>
          </div>
          <div className="hero-image">
            <div className="image-blob"></div>
            <img 
              src={heroImg} 
              alt="Mentalizarte Hero" 
              loading="eager" 
              decoding="async"
              fetchPriority="high"
            />
          </div>
        </div>
      </header>

      {/* Why Choose Us Section */}
      <section className="why-us section-padding">
        <div className="container">
          <div className="section-header center">
            <h2>Te damos estas razones para comenzar a buscar tu mejor versión</h2>
          </div>
          <div className="features-modern-grid">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="modern-feature-card">
                <div className="card-top-accent" style={{ backgroundColor: item.color }}></div>
                <div className="modern-feature-icon" style={{ color: item.color, backgroundColor: `${item.color}15` }}>
                  {item.icon}
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className="card-bg-shape"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team section-padding bg-light">
        <div className="container">
          <div className="section-header center">
            <h2>Nuestro Equipo de Trabajo</h2>
          </div>
          <div className="team-grid">
            {team.map((member, index) => (
              <div key={index} className="team-card">
                <div className="team-image" style={{ background: '#e5e7eb' }}>
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="team-img-fluid" 
                    style={{ objectPosition: member.position }}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="team-info">
                  <h3>{member.name}</h3>
                  <p className="team-role">{member.role}</p>
                  <p className="team-description">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment Section with Video */}
      <section className="commitment section-padding">
        <div className="container">
          <div className="commitment-content">
            <div className="commitment-text">
              <h2>Nuestro compromiso</h2>
              <p>Aquí podrás ver el compromiso que asumimos para la mejora de la Salud Mental y el fortalecimiento de Entornos Saludables.</p>
            </div>
            <LazyYoutube videoId="2chg19p28Ok" title="Nuestro compromiso - Mentalizarte" />
          </div>
        </div>
      </section>
    </div>
  )
}

// Componente para cargar videos de YouTube de forma diferida
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

export default Home
