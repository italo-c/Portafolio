import { Link } from 'react-router-dom'

function Home() {
    return (
        <div>
            <h1>INICIO 🏠</h1>
            <div>
                <p>Este es mi primer proyecto utilizando React.</p>
                <p>Estoy aprendiendo desde cero así que definitivamente habrá cosas que se pueden mejorar, habrá cosas que se ven raras o cosas que uno ve y dice: "???", pero es parte de la curva de aprendizaje (creo...)</p>
                <p>
                    Hecho Por: <code style={{ fontSize: 20, color: 'purple'}}>LOW</code>
                </p>
            </div>
            <div>
                <h2>Próximas agregaciones</h2>
                <ul>
                    <li>Modo Oscuro (obvio, soy informático)</li>
                    <li>Enlace a BD</li>
                    <li>Lógica para LogIn</li>
                    <li>Lógica para SignUp</li>
                    <li>Lógica para Recupera Contraseña (aprendí de PROG3...)</li>
                    <li>Listado de Proyectos</li>
                    <li>Listado de Ideas</li>
                    <li>Página con información de contacto</li>
                    <li>etc...</li>
                </ul>
            </div>
        </div>
    )
}

export default Home
