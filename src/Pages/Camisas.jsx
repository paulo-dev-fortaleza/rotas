
import Layout from "../Components/layout";

const Camisas = () => (
  <Layout>
    <h2>Camisas Personalizadas</h2>
    <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
      <img
        src="https://images.tcdn.com.br/img/img_prod/460977/camiseta_feminina_unissex_desenvolvedor_de_software_programacao_desenvolvimento_linguagens_html_java_93697_1_5dfdbbd59ae7030209cd3612cc50d173.jpg"
        alt="Camiseta 1"
        style={{ width: "200px", borderRadius: "8px" }}
      />
      <img
        src="https://http2.mlstatic.com/D_724475-MLB84776167897_052025-O.jpg"
        alt="Camiseta 2"
        style={{ width: "200px", borderRadius: "8px" }}
      />
      <img
        src="https://cdn.awsli.com.br/300x300/608/608801/produto/345738003/camisa-ja-tentou-reiniciar-siowvv7xp3.png"
        alt="Camiseta 3"
        style={{ width: "200px", borderRadius: "8px" }}
      />
      <img
        src="https://img.elo7.com.br/product/zoom/2C6C095/camisa-i-know-html-and-css-camiseta-anatomia-do-programador.jpg"
        alt="Camiseta 4"
        style={{ width: "200px", borderRadius: "8px" }}
      />
    </div>
  </Layout>
);

export default Camisas;