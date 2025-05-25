// src/pages/Dashboard.jsx
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

function Dashboard() {
    const navigate = useNavigate();

    const usuario = JSON.parse(localStorage.getItem('usuarioLogueado'));

    useEffect(() => {
        if (!usuario) {
            navigate('/');
        }
    }, [navigate, usuario]);

    const handleLogout = () => {
        localStorage.removeItem('usuarioLogueado');
        navigate('/');
    };

    return (
        <div className="dashboard-container">
            <aside className="sidebar">
                <h2>Menú</h2>
                <ul>
                    <li>Inicio</li>
                    <li>Pacientes</li>
                    <li>Citas</li>
                    <li>Configuración</li>
                </ul>
                <button onClick={handleLogout} className="logout-btn">Cerrar sesión</button>
            </aside>

            <main className="main-content">
                <header className="header">
                    <h1>Bienvenido, {usuario?.nombre}</h1>
                </header>

                <section className="content">
                    <p>Selecciona una opción del menú lateral para comenzar.</p>
                </section>
            </main>
        </div>
    );
}

export default Dashboard;
