import { useState } from 'react'
import { ShieldCheck, ArrowRight, Eye, EyeOff } from 'lucide-react'

function Intranet() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    
    if (!username || !password) {
      setError('Por favor completa todos los campos')
      return
    }
    
    window.open('https://cpanel4-co.conexcol.net:2083/', '_blank')
  }

  return (
    <div className="intranet-page" style={{ 
      paddingTop: '160px', 
      paddingBottom: '100px',
      minHeight: '80vh',
      display: 'flex',
      alignItems: 'center'
    }}>
      <div className="container">
        <div className="login-card" style={{
          maxWidth: '450px',
          margin: '0 auto',
          padding: '50px',
          backgroundColor: 'var(--soft-gray)',
          borderRadius: '30px',
          boxShadow: '0 20px 40px rgba(0,0,0,0.05)',
          textAlign: 'center'
        }}>
          <div className="icon-wrapper" style={{
            width: '80px',
            height: '80px',
            backgroundColor: 'var(--white)',
            borderRadius: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 30px',
            color: 'var(--primary-cyan)',
            boxShadow: '0 4px 10px rgba(0,0,0,0.05)'
          }}>
            <ShieldCheck size={40} />
          </div>
          <h2>Acceso Intranet</h2>
          <p style={{ color: 'var(--text-light)', marginBottom: '30px' }}>Ingresa tus credenciales para acceder a tu panel profesional o de paciente.</p>
          
          {error && (
            <div style={{ 
              backgroundColor: '#fee2e2', 
              color: '#dc2626', 
              padding: '12px', 
              borderRadius: '10px', 
              marginBottom: '20px',
              fontSize: '0.9rem'
            }}>
              {error}
            </div>
          )}
          
          <form onSubmit={handleSubmit}>
            <div className="form-group" style={{ marginBottom: '20px', textAlign: 'left' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Usuario</label>
              <input 
                type="text" 
                placeholder="Tu usuario" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                style={{
                  width: '100%',
                  padding: '12px 20px',
                  borderRadius: '12px',
                  border: '1px solid #ddd',
                  outline: 'none',
                  fontSize: '1rem'
                }}
              />
            </div>

            <div className="form-group" style={{ marginBottom: '30px', textAlign: 'left', position: 'relative' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Contraseña</label>
              <div style={{ position: 'relative' }}>
                <input 
                  type={showPassword ? 'text' : 'password'} 
                  placeholder="********" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '12px 20px',
                    paddingRight: '50px',
                    borderRadius: '12px',
                    border: '1px solid #ddd',
                    outline: 'none',
                    fontSize: '1rem'
                  }}
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  style={{
                    position: 'absolute',
                    right: '15px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    color: 'var(--text-light)'
                  }}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <button 
              type="submit" 
              className="btn-primary-large" 
              style={{ width: '100%', justifyContent: 'center' }}
            >
              Ingresar <ArrowRight size={20} />
            </button>
          </form>
          
          <p style={{ marginTop: '20px', fontSize: '0.9rem', color: 'var(--text-light)' }}>
            ¿Olvidaste tu contraseña? <a href="https://cpanel4-co.conexcol.net:2083/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary-cyan)', fontWeight: '600' }}>Recupérala aquí</a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Intranet
