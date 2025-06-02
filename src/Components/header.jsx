import { Link } from "react-router-dom";
import "./Styles/header.css";

const Header = () => (
  <header>
    <h1>DS Personalizados</h1>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">Sobre</Link>
      <Link to="/contact">Contato</Link>
    </nav>
  </header>
);

export default Header;
