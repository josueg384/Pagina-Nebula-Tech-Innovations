import ".././css/header.css";
import logo from '.././assets/logo-nebula.webp'; // Logo

export function Header() {
  return (
   <header>
        <div>
            <img src={logo} alt="Logo de Nebula Tech Innovations" />
            <h1>Nebula Tech Innovations</h1>
        </div>
        <nav>
            <ul>
                <li>Inicio</li>
                <li>Sobre nosotros</li>
                <li>Servicios</li>
                <li>Clientes</li>
                <li>Nuestros sistemas</li>
                <li>Contatanos</li>
            </ul>
        </nav>
   </header>
  );
}
