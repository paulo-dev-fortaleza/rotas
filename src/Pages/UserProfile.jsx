import { useParams } from "react-router-dom";
import Layout from "../Components/layout";
import "../Components/Styles/userprofile.css";

const UserProfile = () => {
  const { id } = useParams(); // Obtém o ID da URL

  return (
    <Layout>
      <div className="user-profile">
        <h2>Perfil do Usuário</h2>
        <p>
          Você está visualizando o perfil do usuário <strong>{id}</strong>.
        </p>
      </div>
    </Layout>
  );
};

export default UserProfile;
