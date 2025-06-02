import Layout from "../Components/layout";

const Bolsas = () => (
  <Layout>
    <h2>Bolsas Personalizadas</h2>
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "16px",
        justifyContent: "center",
      }}
    >
      <img
        src="https://img.elo7.com.br/product/300x400/4EF0030/100-bolsa-em-tnt-33x38x15cm-gr60-com-estampa-infeite.jpg"
        alt="Bolsa 1"
        style={{
          width: "200px",
          height: "200px",
          objectFit: "cover",
          borderRadius: "8px",
          flex: "1 1 200px",
        }}
      />
      <img
        src="https://rlv.zcache.com.br/bolsa_tote_grande_logotipo_comercial_empresa_promocional_qr-r_a2ey1p_306.jpg"
        alt="Bolsa 2"
        style={{
          width: "200px",
          height: "200px",
          objectFit: "cover",
          borderRadius: "8px",
          flex: "1 1 200px",
        }}
      />

      <img
        src="https://rlv.zcache.com.br/bolsa_tote_mini_seu_logotipo_de_empresa_aqui_codigo_qr_impressao-rac0da6a652854fe2b514de6803aec3d1_v9wbe_8byvr_306.jpg"
        alt="Bolsa 4"
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

export default Bolsas;
