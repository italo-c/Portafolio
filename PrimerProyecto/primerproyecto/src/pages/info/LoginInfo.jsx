import { Link } from 'react-router-dom'

function LoginInfo() {
    return (
        <div>
            <Link to="/login" className='btn-link'>Regresar</Link>
            <h1>Login Info 🔐</h1>
            <h2>¿Por qué un LogIn?</h2>
            <p>La idea es que en esta pestaña me pueda logear como yo (Italo) y acceder a todo el contenido al estilo de un administrador. Lo pienso diseñar como un espacio en el que pueda gestionar accesos (cuentas, permisos, etc.), subir mis códigos directo desde el front, poder manejar chats quizás con usuarios registrados, manejar notificaciones o algo así (no sé, luego se me ocurrirá algo chévere)</p>
            <h2>¿Qué beneficios tendría cada usuario?</h2>
            <ul>
                <li>Usuarios No Registrados</li>
                <p>Este tipo de usuario es el usuario común. El que por curiosidad entró a la página, quiso ver quién era o copiarse algún código por ahí...</p>
                <p>Los beneficios serían: NINGUNO</p>
                <p>Bueno, si podrán ver algunos proyectos (o partes del proyecto: resultados, segmentos de código, o similar), podrán visualizar algunas secciones con información de la página o información de contacto (o mi CV para chambear). Luego de eso, no mucho más, aparte de la opción, lógicamente, de poder registrarse :)</p>
                <li>Usuarios Registrados</li>
                <p>Este tipo de usuario, es el que se moría de ganas de copiar el código y no se lo permiti por no ser usuario registrado (pensaste que sería tan fácil?).</p>
                <p>Los beneficios serían: Acceso a mis proyectos open source, un medio de mensajería directa conmigo por si me desean contactar por el mismo sitio, un espacio para compartir ideas o visualicen las mias, quizás algún beneficio adicional pero ahora no se me ocurre nada xd</p>
                <p></p>
            </ul>
        </div>
    );
}
export default LoginInfo
