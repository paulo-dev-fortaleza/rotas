import Layout from "../Components/layout";

const Home = () => (
  <Layout>
    <h2>Bem-vindo à DS personalizados!</h2>
    <p>
      Transforme suas ideias em produtos únicos! Aqui você encontra{" "}
      <strong>camisas, canecas e bonés personalizados</strong> para presentear,
      divulgar sua marca ou eternizar momentos especiais.
    </p>
    <section>
      <h3>Nossos Produtos</h3>
      <ul>
        <li>
          <strong>Camisas Personalizadas:</strong> Estampas exclusivas para
          todos os estilos e ocasiões.
        </li>
        <li>
          <strong>Canecas Personalizadas:</strong> Perfeitas para lembranças,
          brindes e uso diário.
        </li>
        <li>
          <strong>Bonés Personalizados:</strong> Seu visual com a sua cara, para
          eventos ou uso pessoal.
        </li>
      </ul>
    </section>
    <section>
      <h3>Depoimentos de Clientes</h3>
      <blockquote>
        "Amei minha camisa personalizada! Atendimento rápido e produto de
        qualidade."
        <br />
        <cite>- Juliana S.</cite>
      </blockquote>
      <blockquote>
        "As canecas ficaram lindas, fizeram o maior sucesso no evento!"
        <br />
        <cite>- Ricardo M.</cite>
      </blockquote>
    </section>
  </Layout>
);

export default Home;
