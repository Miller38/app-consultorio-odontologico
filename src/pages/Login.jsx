import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email || !password) {
            setError('Todos los campos son obligatorios');
            return;
        }

        const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
        const usuario = usuarios.find(user => user.email === email && user.password === password);

        if (!usuario) {
            setError('Correo o contraseña incorrectos');
            return;
        }

        localStorage.setItem('usuarioLogueado', JSON.stringify(usuario));
        navigate('/dashboard');
    };

    return (
        <div className="login-container">
            <div className="login-card">
                <h2>Iniciar Sesión</h2>
                {error && <p className="error">{error}</p>}
                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        placeholder="Correo"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Contraseña"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <div className="form-check my-2">
                        <input
                            type="checkbox"
                            className="form-check-input small-checkbox"
                            id="showPasswordCheck"
                            checked={showPassword}
                            onChange={() => setShowPassword(!showPassword)}
                        />
                        <label className="form-check-label" htmlFor="showPasswordCheck">
                            Mostrar contraseña
                        </label>
                    </div>
                    <button type="submit">Ingresar</button>
                </form>
                <p>¿No tienes cuenta? <Link to="/register">Regístrate</Link></p>
            </div>
        </div>
    );
}

export default Login;


