import { Stethoscope, Users, Heart, GraduationCap, Sparkles, ShieldCheck, Clock, CheckCircle2, ArrowRight } from 'lucide-react'
import consultorioImg from '../assets/CONSULTORIO PSICOLOGICO.webp'
import trabajoSocialImg from '../assets/ASESORIA EN TRABAJO SOCIAL.webp'
import centroEscuchaImg from '../assets/CENTRO DE ESCUCHA.webp'
import talleresImg from '../assets/TALLERES GRUPALES.webp'

function Services() {
  const mainServices = [
    {
      title: "Consultorio Psicológico",
      description: "Acompañamos tu proceso de atención por medio de terapias basadas en enfoques cognitivo - conductual y sistémico por medio de técnicas de tercera generación y actividades personalizadas.",
      icon: <Stethoscope size={24} />,
      image: consultorioImg,
      color: "var(--primary-cyan)",
      whatsappMsg: "Hola, me interesa el servicio de Consultorio Psicológico"
    },
    {
      title: "Asesoría en Trabajo Social",
      description: "Orientación especializada para individuos y familias en relación a la formación y/o fortalecimiento de entornos saludables que potencien sus habilidades sociales y fortalezcan su plan de vida.",
      icon: <Users size={24} />,
      image: trabajoSocialImg,
      color: "var(--accent-purple)",
      whatsappMsg: "Hola, me interesa el servicio de Asesoría en Trabajo Social"
    },
    {
      title: "Centro de Escucha",
      description: "Acompañamiento y apoyo para parejas y personas que necesiten la intervención de profesionales. Aquí te escuchamos y te ayudamos a encontrar soluciones efectivas.",
      icon: <Heart size={24} />,
      image: centroEscuchaImg,
      color: "var(--primary-cyan)",
      whatsappMsg: "Hola, me interesa el Centro de Escucha"
    },
    {
      title: "Talleres Grupales",
      description: "Programas diseñados para la prevención y promoción de la salud mental para individuos, grupos y empresas. Te brindamos herramientas para mejorar tu bienestar general.",
      icon: <GraduationCap size={24} />,
      image: talleresImg,
      color: "var(--accent-purple)",
      whatsappMsg: "Hola, me interesa el servicio de Talleres Grupales"
    }
  ]

  const programs = [
    {
      name: "Conecta +",
      tagline: "Exploración, Conexión y Reconciliación",
      description: "Una estrategia que enfoca las intervenciones profesionales en tres pilares principales: Exploración, Conexión y Reconciliación, que engloban todo un proceso profesional y permiten abordar temas cotidianos como la resiliencia, el empoderamiento, el perdón, además de temas más profundos relacionados con la Historia de Vida.",
      details: ["Valoración psicosocial", "Consulta personalizada en psicología", "Consulta por Trabajo Social", "Asesoría en espacios habitacionales"]
    },
    {
      name: "Cuidarte para Cuidar",
      tagline: "Responsabilidad Social para Cuidadores",
      description: "El presente programa se encuentra dentro de nuestro componente de Responsabilidad Social y está centrado en la atención a personas cuya labor y dedicación los convierte en cuidadores y quienes gracias a su autocuidado pueden cumplir con la labor de cuidar a los demás.",
      details: ["Higiene en salud mental", "Planeación estratégica del cuidado", "Autocuidado integral", "Aprovechamiento del tiempo libre", "Técnicas de manejo del estrés", "Redes de apoyo familiar"]
    },
    {
      name: "Red de Escucha Viva",
      tagline: "Comunidad Virtual de Bienestar",
      description: "Las redes sociales son herramientas valiosas para formar una comunidad a favor de la Salud Mental. Gracias a nuestra presencia ascendente dentro de las redes sociales, tenemos material de alto valor para la promoción de la Salud Mental y Entornos Saludables, que desde información científica brinda información real y práctica para el día a día.",
      details: ["Contenido educativo en redes sociales", "Información científica y práctica", "Promoción de entornos saludables", "Comunidad de cuidado mutuo"]
    }
  ]

  return (
    <div className="services-page" style={{ paddingTop: '100px' }}>
      {/* Portfolio Header */}
      <section className="services-hero">
        <div className="container">
          <div className="section-header-centered">
            <h1 className="display-title">Servicios que transforman vidas</h1>
          </div>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="portfolio-grid-section">
        <div className="container">
          <div className="services-modern-grid">
            {mainServices.map((service, index) => (
              <div key={index} className="modern-service-card">
                <div className="service-card-image">
                  <img src={service.image} alt={service.title} loading="lazy" decoding="async" />
                  <div className="service-icon-floating" style={{ backgroundColor: service.color }}>
                    {service.icon}
                  </div>
                </div>
                <div className="service-card-content">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <div className="card-footer">
                    <a 
                      href={`https://wa.me/573152936595?text=${encodeURIComponent(service.whatsappMsg)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="learn-more"
                      style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                    >
                      Saber más <ArrowRight size={16} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="programs-section" style={{ backgroundColor: '#f0fbfc', paddingTop: '10px', paddingBottom: '100px' }}>
        <div className="container">
          <div className="section-header-centered" style={{ marginBottom: '30px' }}>
            <h2>Metodologías que marcan la diferencia</h2>
          </div>
          
          <div className="programs-grid" style={{ marginTop: '60px' }}>
            {programs.map((program, index) => (
              <div key={index} className="program-premium-card">
                <div className="program-content">
                  <Sparkles className="spark-icon" />
                  <h3>{program.name}</h3>
                  <p className="tagline">{program.tagline}</p>
                  <p className="program-description">{program.description}</p>
                  <ul className="program-details">
                    {program.details.map((detail, i) => (
                      <li key={i}><CheckCircle2 size={18} /> {detail}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Virtual Community */}
      <section className="community-cta" style={{ padding: '100px 0' }}>
        <div className="container">
          <div className="cta-gradient-box">
            <div className="cta-content">
              <h2>Descubre nuestra comunidad virtual</h2>
              <p>Un espacio de aprendizaje y crecimiento constante. Las redes sociales son herramientas valiosas para formar una comunidad a favor de la Salud Mental.</p>
              <a 
                href="https://www.instagram.com/mentalizarteasesores"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-white-premium"
              >
                Unirme a la Comunidad
              </a>
            </div>
            <div className="cta-visual">
              <div className="floating-icons">
                <ShieldCheck size={40} className="icon-1" />
                <Clock size={40} className="icon-2" />
                <Sparkles size={40} className="icon-3" />
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Services
