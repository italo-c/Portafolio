import ConsultaBackend from './resources/ConsultaBackend';
import AuthBack from './resources/AuthBack';

const Tests = () => {
  return (
    <div>
      <h1>Página de Tests</h1>
          <p>Bienvenido a la página de pruebas.</p>
          <div>
              <h2>Prueba de conexión a backend</h2>
              <ConsultaBackend />
          </div>
          <div>
              <h2>Prueba de Autenticacion de Usuarios</h2>
              <AuthBack />
          </div>
    </div>
  );
};

export default Tests;