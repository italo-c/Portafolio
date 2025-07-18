import { useState } from 'react';

function ConsultaBackend() {
    const [input, setInput] = useState('');
    const [respuesta, setRespuesta] = useState('');

    const consultar = () => {
        fetch(`http://localhost:8080/api/hola?nombre=${input}`)
            .then(res => res.text()) // o res.json() si el backend devuelve JSON
            .then(data => setRespuesta(data))
            .catch(err => console.error(err));
    };

    return (
        <div style={{ marginTop: '2rem', padding: '1rem', border: '1px solid #ccc' }}>
            <h2>Consulta al Backend 🚀</h2>
            <p>Introduce tu nombre para saludartes desde al backend (si no hay respuesta, el test falló):</p>
            <input
                type="text"
                placeholder="Escribe tu nombre"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={consultar} style={{ marginLeft: '1rem' }}>Enviar</button>

            {respuesta && (
                <div style={{ marginTop: '1rem', color: 'green' }}>
                    Respuesta del backend: <strong>{respuesta}</strong>
                </div>
            )}
        </div>
    );
}

export default ConsultaBackend;
