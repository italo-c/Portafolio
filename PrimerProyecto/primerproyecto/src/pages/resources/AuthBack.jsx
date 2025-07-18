import { useState } from 'react';

function AuthBack() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [token, setToken] = useState('');
    const [respuesta, setRespuesta] = useState('');

    const API = 'http://localhost:8080/api/auth';

    const registrar = () => {
        fetch(`${API}/register`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        })
        .then(res => res.text())
        .then(data => setRespuesta(data))
        .catch(err => setRespuesta('Error al registrar'));
    };

    const iniciarSesion = () => {
        fetch(`${API}/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        })
        .then(res => res.json())
        .then(data => {
            setToken(data.token);
            setRespuesta('Login exitoso ✅');
        })
        .catch(err => {
            setRespuesta('Credenciales inválidas ❌');
        });
    };

    return (
        <div style={{ marginTop: '2rem', padding: '1rem', border: '1px solid #ccc' }}>
            <h2>Login & Registro 🔐</h2>

            <input
                type="text"
                placeholder="Usuario"
                value={username}
                onChange={e => setUsername(e.target.value)}
                style={{ display: 'block', marginBottom: '0.5rem' }}
            />

            <input
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={e => setPassword(e.target.value)}
                style={{ display: 'block', marginBottom: '0.5rem' }}
            />

            <button onClick={registrar} style={{ marginRight: '1rem' }}>Registrarse</button>
            <button onClick={iniciarSesion}>Iniciar sesión</button>

            {respuesta && (
                <div style={{ marginTop: '1rem', color: 'green' }}>
                    {respuesta}
                </div>
            )}

            {token && (
                <div style={{ marginTop: '1rem', wordBreak: 'break-word' }}>
                    <strong>Token:</strong><br />
                    <code>{token}</code>
                </div>
            )}
        </div>
    );
}

export default AuthBack;
