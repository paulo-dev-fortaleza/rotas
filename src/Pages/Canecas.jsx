import Layout from "../Components/layout";

const Canecas = () => (
  <Layout>
    <h2>Canecas Personalizadas</h2>
    <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
      <img
        src="https://a-static.mlcdn.com.br/800x560/caneca-ti-com-nome-personalizado-presente-programador-mago-das-camisas/magodascamisas3/15868776180/002e8f1619425761e2c1c15c993d5dc3.jpeg"
        alt="Caneca 1"
        style={{
          width: "200px",
          height: "200px",
          objectFit: "cover",
          borderRadius: "8px",
          flex: "1 1 200px",
        }}
      />
      <img
        src="https://images.tcdn.com.br/img/img_prod/460977/caneca_node_js_software_codigo_aberto_v8_javascript_linguagem_programacao_html_css_branca_ev_93651_1_d98861374efc4441a420490ef747b4ae.jpg"
        alt="Caneca 2"
        style={{
          width: "200px",
          height: "200px",
          objectFit: "cover",
          borderRadius: "8px",
          flex: "1 1 200px",
        }}
      />
      <img
        src="https://cdn.awsli.com.br/300x300/608/608801/produto/120475333/36a1277f1c.jpg"
        style={{
          width: "200px",
          height: "200px",
          objectFit: "cover",
          borderRadius: "8px",
          flex: "1 1 200px",
        }}
      />
    </div>
  </Layout>
);

export default Canecas;
