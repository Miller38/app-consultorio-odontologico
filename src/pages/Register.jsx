// src/pages/Register.jsx
// src/pages/Register.jsx
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Register() {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!nombre || !email || !password) {
            setError('Todos los campos son obligatorios');
            return;
        }

        // Obtener usuarios existentes
        const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

        // Verificar si ya existe el email
        const existe = usuarios.find((user) => user.email === email);
        if (existe) {
            setError('El correo ya está registrado');
            return;
        }

        // Agregar nuevo usuario
        usuarios.push({ nombre, email, password });
        localStorage.setItem('usuarios', JSON.stringify(usuarios));

        // Redirigir al login
        navigate('/');
    };

    return (
        <div className="login-container">
  <div className="login-card register-card">
    <h2 className="mb-4">Registro</h2>
    {error && <p className="error">{error}</p>}
    <form onSubmit={handleSubmit}>
      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          id="floatingNombre"
          placeholder="Nombre completo"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <label htmlFor="floatingNombre">Nombre completo</label>
      </div>

      <div className="form-floating mb-3">
        <input
          type="email"
          className="form-control"
          id="floatingEmail"
          placeholder="Correo"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="floatingEmail">Correo</label>
      </div>

      <div className="form-floating mb-3">
        <input
          type="password"
          className="form-control"
          id="floatingPassword"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label htmlFor="floatingPassword">Contraseña</label>
      </div>

      <button type="submit" className="btn btn-primary w-100">Registrarse</button>
    </form>
    <p className="mt-3">
      ¿Ya tienes cuenta? <Link to="/">Inicia sesión</Link>
    </p>
  </div>
</div>

    );
}

export default Register;
