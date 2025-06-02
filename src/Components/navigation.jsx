import { Link } from "react-router-dom";
import "./Styles/navigation.css";

const Navigation = () => (
  <nav>
    <ul>
      <li>
        <Link to="/camisas">Camisas</Link>
      </li>
      <li>
        <Link to="/canecas">Canecas</Link>
      </li>
      <li>
        <Link to="/bolsas">Bolsas</Link>
      </li>
    </ul>
  </nav>
);

export default Navigation;
