import React from 'react';

const styles = {
  container: {
    maxWidth: '800px',
    margin: 'auto',
    padding: '30px',
    backgroundColor: '#fff',
    borderRadius: '10px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
    lineHeight: '1.7',
    fontFamily: ' sans-serif',
    color: '#333',
  },
  title: {
    textAlign: 'center',
    fontSize: '32px',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '20px',
  },
  sectionTitle: {
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#555',
    margin: '20px 0 10px',
  },
  text: {
    fontSize: '16px',
    color: '#666',
    marginBottom: '15px',
  },
  footer: {
    textAlign: 'center',
    marginTop: '30px',
    fontSize: '14px',
    color: '#999',
  },
};

const DireitosAutorais = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Direitos Autorais</h1>

      <section>
        <h2 style={styles.sectionTitle}>Introdução</h2>
        <p style={styles.text}>
          Bem-vindo(a) à seção de Direitos Autorais do Portal TEA. Aqui, você encontrará informações importantes sobre a
          propriedade e uso do conteúdo disponível neste site.
        </p>
      </section>

      <section>
        <h2 style={styles.sectionTitle}>Propriedade Intelectual</h2>
        <p style={styles.text}>
          Todo o conteúdo deste site, incluindo textos, imagens, gráficos e outras informações, são protegidos por direitos
          autorais e outras leis de propriedade intelectual. É proibida a reprodução, distribuição ou modificação de qualquer
          conteúdo sem autorização prévia.
        </p>
      </section>

      <section>
        <h2 style={styles.sectionTitle}>Permissões de Uso</h2>
        <p style={styles.text}>
          Para obter permissões para uso do conteúdo do Portal TEA em publicações ou materiais externos, entre em contato
          conosco. Cada solicitação será analisada individualmente para garantir que os direitos e interesses dos proprietários
          sejam preservados.
        </p>
      </section>

      <section>
        <h2 style={styles.sectionTitle}>Limitações de Responsabilidade</h2>
        <p style={styles.text}>
          O Portal TEA não se responsabiliza por quaisquer usos não autorizados do conteúdo e se reserva o direito de tomar
          medidas legais em casos de infração de direitos autorais.
        </p>
      </section>

      <footer style={styles.footer}>
        <p>
          Caso tenha dúvidas sobre direitos autorais ou uso do conteúdo, entre em contato com nossa equipe de suporte.
        </p>
      </footer>
    </div>
  );
};

export default DireitosAutorais;
