import { Target, Eye, Heart, CheckCircle2, User, Users, MapPin, Presentation, Zap, Quote } from 'lucide-react'
import adrianaImg from '../assets/adriana.webp'
import andresImg from '../assets/andres.webp'
import lauraImg from '../assets/laura.webp'
import asesoresImg from '../assets/asesores.webp'

// Galería assets
import gal1 from '../assets/GALERIA1.webp'
import gal2 from '../assets/GALERIA2.webp'
import gal3 from '../assets/GALERIA3.webp'
import gal4 from '../assets/GALERIA4.webp'
import gal5 from '../assets/GALERIA5.webp'
import gal6 from '../assets/GALERIA6.webp'
import gal7 from '../assets/GALERIA7.webp'
import gal8 from '../assets/GALERIA8.webp'

function About() {
  const team = [
    {
      name: "Adriana Rojas",
      role: "Psicóloga clínica y Mg. en Terapia Sistémica",
      description: "Psicóloga clínica, especializada en terapia sistémica y terapias de tercera generación. Su práctica se centra en la asesoría individual y familiar, ofreciendo un enfoque comprensivo y empático en cada consulta.",
      image: adrianaImg
    },
    {
      name: "Andrés Vásquez",
      role: "Trabajador Social",
      description: "Trabajador Social, con una extensa experiencia en la atención a diversos grupos etarios en áreas como salud, restablecimiento de derechos, atención a población de Alta Vulnerabilidad y gestión de crisis.",
      image: andresImg
    },
    {
      name: "Laura Uyazán",
      role: "Trabajadora Social y Mg. en Responsabilidad Social",
      description: "Trabajadora Social con una destacada trayectoria en la atención a proyectos comunitarios, especialmente dirigidos a poblaciones vulnerables. Su formación como Magíster en Responsabilidad Social y Sostenibilidad le proporciona una perspectiva integral.",
      image: lauraImg
    }
  ]

  const gallery = [gal1, gal2, gal3, gal4, gal5, gal6, gal7, gal8]

  return (
    <div className="about-page" style={{ paddingTop: '80px' }}>
      <section className="about-detailed">
        <div className="container">
          <h1 className="about-title">Quiénes Somos</h1>
          
          <div className="about-grid">
            <div className="about-main-image">
              <div className="image-decoration-blob"></div>
              <img src={asesoresImg} alt="Equipo Mentalizarte Asesores" loading="eager" decoding="async" />
              <div className="floating-badge">
                <div className="badge-icon"><CheckCircle2 size={16} /></div>
                <span>Equipo Certificado</span>
              </div>
            </div>
            
            <div className="about-main-text">
              <div className="about-content-block">
                <p className="about-lead">
                  En Mentalizarte Asesores, somos un Consultorio Psicosocial Colombiano, cuyo talento humano está comprometido con el bienestar integral de las personas.
                </p>
                <p className="about-description">
                  Ofrecemos servicios de salud mental a través de consultas online y en nuestra sede en Bogotá. Nuestro enfoque se basa en una combinación de Psicología y Trabajo Social para brindar el apoyo necesario en cada etapa de la vida.
                </p>
              </div>
              
              <div className="perks-grid">
                <div className="perk-card">
                  <div className="perk-icon-inner"><User size={20} /></div>
                  <span>Consultoría individual</span>
                </div>
                <div className="perk-card">
                  <div className="perk-icon-inner"><Users size={20} /></div>
                  <span>Atención familiar</span>
                </div>
                <div className="perk-card">
                  <div className="perk-icon-inner"><MapPin size={20} /></div>
                  <span>Atención presencial</span>
                </div>
                <div className="perk-card">
                  <div className="perk-icon-inner"><Presentation size={20} /></div>
                  <span>Talleres de formación</span>
                </div>
                <div className="perk-card">
                  <div className="perk-icon-inner"><Zap size={20} /></div>
                  <span>Técnicas de última generación</span>
                </div>
              </div>
            </div>
          </div>

          <div className="quote-section" style={{ marginTop: '20px', marginBottom: '20px' }}>
            <div className="quote-container">
              <div className="quote-icon-top">
                <Quote size={40} fill="currentColor" />
              </div>
              <p className="quote-text">
                "No solo es ver, escuchar, y entender sino actuar y acompañar"
              </p>
              <div className="quote-decoration">
                <Heart className="heart-icon" size={24} />
                <div className="decoration-line"></div>
              </div>
            </div>
          </div>

          <div className="mission-vision-grid">
            <div className="mv-card">
              <Target className="icon" />
              <h3>Misión</h3>
              <p>Apoyar a las personas en la comprensión, reconocimiento y atención de sus necesidades en el área psicosocial, ofreciendo los espacios de escucha, comprensión y atención necesarios para la potenciación de sus habilidades.</p>
            </div>
            <div className="mv-card">
              <Eye className="icon" />
              <h3>Visión</h3>
              <p>Para el año 2032 ser reconocidos como una de las empresas líderes en el área psicosocial a nivel nacional e internacional que se encuentre al alcance de las personas que requieran nuestros servicios, siendo reconocidos por la amabilidad, calidez humana y profesionalismo en el desarrollo de cada una de nuestras actividades.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team" style={{ backgroundColor: 'var(--white)', padding: '20px 0 80px' }}>
        <div className="container">
          <div className="section-header" style={{ marginBottom: '50px' }}>
            <h2 style={{ fontSize: '2.2rem', fontWeight: '800', color: 'var(--text-dark)' }}>
              Conoce a los profesionales que te acompañarán
            </h2>
          </div>
          <div className="team-grid">
            {team.map((member, index) => (
              <div key={index} className="team-card">
                <div className="team-image">
                  <img src={member.image} alt={member.name} className="team-img-fluid" loading="lazy" decoding="async" />
                </div>
                <div className="team-info">
                  <h3>{member.name}</h3>
                  <span className="team-role">{member.role}</span>
                  <p className="team-description">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="gallery" style={{ backgroundColor: 'var(--white)', padding: '0 0 100px' }}>
        <div className="container">
          <div className="section-header" style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '2.2rem', fontWeight: '800', color: 'var(--text-dark)' }}>
              Nuestro entorno y labor diaria
            </h2>
          </div>
          <div className="gallery-grid">
            {gallery.map((img, index) => (
              <div key={index} className="gallery-item">
                <img src={img} alt={`Labor diaria ${index + 1}`} loading="lazy" decoding="async" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
