import Layout from "../Components/layout";

const Contact = () => (
  <Layout>
    <h2>Contato</h2>
    <p>Entre em contato conosco para orçamentos, dúvidas ou sugestões!</p>
    <ul>
      <li>
        <strong>Telefone:</strong> (85) 99403-6042
      </li>
      <li>
        <strong>E-mail:</strong> contato@dspersonalizados.com
      </li>
      <li>
        <strong>WhatsApp:</strong> (85) 98797-6189
      </li>
      <li>
        <strong>Instagram:</strong>{" "}
        <a
          href="https://instagram.com/ds.grafica_e_personalizados"
          target="_blank"
          rel="noopener noreferrer"
        >
          @ds.grafica_e_personalizados
        </a>
      </li>
      <li>
        <strong>Facebook:</strong>{" "}
        <a
          href="https://facebook.com/ds.grafica.e.personalizados"
          target="_blank"
          rel="noopener noreferrer"
        >
          facebook.com/dspersonalizados
        </a>
      </li>
    </ul>
  </Layout>
);

export default Contact;
