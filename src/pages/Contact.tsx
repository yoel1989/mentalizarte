import { Phone, Mail, Globe, MapPin } from 'lucide-react'

function Contact() {
  return (
    <div className="contact-page" style={{ paddingTop: '160px', paddingBottom: '100px' }}>
      <div className="container">
        <div className="section-header">
          <h2>Te atenderemos en los siguientes canales de comunicación</h2>
        </div>
        
        <div className="contact-grid" style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '40px',
          marginTop: '60px'
        }}>
          <div className="contact-card" style={{
            padding: '40px',
            backgroundColor: 'var(--soft-gray)',
            borderRadius: '30px',
            textAlign: 'center'
          }}>
            <Phone className="icon" style={{ color: 'var(--primary-cyan)', marginBottom: '20px', width: '40px', height: '40px' }} />
            <h3 style={{ marginBottom: '20px' }}>Atención al Cliente</h3>
            <p style={{ fontSize: '1.2rem', fontWeight: '700', color: 'var(--text-dark)' }}>+57 3152936595</p>
            <p style={{ color: 'var(--text-light)', marginTop: '10px' }}>contacto@mentalizarteasesores.co</p>
          </div>

          <div className="contact-card" style={{
            padding: '40px',
            backgroundColor: 'var(--soft-gray)',
            borderRadius: '30px',
            textAlign: 'center'
          }}>
            <ShieldCheck className="icon" style={{ color: 'var(--accent-purple)', marginBottom: '20px', width: '40px', height: '40px' }} />
            <h3 style={{ marginBottom: '20px' }}>Para Notificaciones</h3>
            <p style={{ fontSize: '1.2rem', fontWeight: '700', color: 'var(--text-dark)' }}>+57 300 8053678</p>
            <p style={{ color: 'var(--text-light)', marginTop: '10px' }}>mentalizarteasesores@gmail.com</p>
          </div>

          <div className="contact-card" style={{
            padding: '40px',
            backgroundColor: 'var(--soft-gray)',
            borderRadius: '30px',
            textAlign: 'center'
          }}>
            <MapPin className="icon" style={{ color: 'var(--primary-cyan)', marginBottom: '20px', width: '40px', height: '40px' }} />
            <h3 style={{ marginBottom: '20px' }}>Sede Presencial</h3>
            <p style={{ fontSize: '1.1rem', fontWeight: '700', color: 'var(--text-dark)' }}>Bogotá, Colombia</p>
            <p style={{ color: 'var(--text-light)', marginTop: '10px' }}>Atención en Bogotá, Mosquera y Soacha</p>
          </div>
        </div>

        {/* Form Placeholder */}
        <div className="contact-form-section" style={{ marginTop: '80px', textAlign: 'center' }}>
          <h3>¿Tienes alguna duda?</h3>
          <p style={{ marginBottom: '40px' }}>Escríbenos y nos pondremos en contacto contigo lo antes posible.</p>
          <a 
            href="https://wa.me/573152936595?text=Hola,%20tengo%20una%20consulta%20y%20me%20gustaría%20recibir%20más%20información" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-primary-large" 
            style={{ margin: '0 auto', display: 'inline-flex', textDecoration: 'none' }}
          >
            Escríbenos ahora
          </a>
        </div>
      </div>
    </div>
  )
}

// Helper to use ShieldCheck in this file
import { ShieldCheck } from 'lucide-react'

export default Contact
