import React from 'react';

const containerStyle = {
  padding: '40px',
  background: '#ffffff', // Alterado para fundo branco
  color: '#333',
  fontFamily: 'Arial, sans-serif',
  lineHeight: '1.6',
  maxWidth: '900px',
  margin: 'auto',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
};

const titleStyle = {
  textAlign: 'center',
  marginBottom: '20px'
};

const sectionStyle = {
  marginBottom: '20px'
};

const footerStyle = {
  textAlign: 'center',
  marginTop: '40px'
};

const Privacidade = () => {
  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Política de Privacidade</h1>

      <section style={sectionStyle}>
        <h2>1. Introdução</h2>
        <p>
          A sua privacidade é importante para nós. Esta política de privacidade explica como coletamos, usamos e protegemos
          as suas informações pessoais ao utilizar o Portal TEA.
        </p>
      </section>

      <section style={sectionStyle}>
        <h2>2. Informações Coletadas</h2>
        <p>
          Podemos coletar informações pessoais, como nome, email e outras informações necessárias para melhorar a sua experiência
          na plataforma e fornecer um serviço mais personalizado.
        </p>
      </section>

      <section style={sectionStyle}>
        <h2>3. Uso das Informações</h2>
        <p>
          As informações coletadas são utilizadas para melhorar a experiência do usuário, oferecer suporte e permitir
          a interação na comunidade, sempre respeitando a sua privacidade e protegendo os seus dados.
        </p>
      </section>

      <section style={sectionStyle}>
        <h2>4. Compartilhamento de Informações</h2>
        <p>
          Não compartilhamos suas informações pessoais com terceiros sem o seu consentimento, exceto quando exigido por lei.
        </p>
      </section>

      <section style={sectionStyle}>
        <h2>5. Segurança dos Dados</h2>
        <p>
          Utilizamos medidas de segurança para proteger suas informações pessoais contra acesso não autorizado e divulgação.
        </p>
      </section>

      <section style={sectionStyle}>
        <h2>6. Alterações na Política</h2>
        <p>
          Esta política de privacidade pode ser atualizada ocasionalmente. Recomendamos revisar esta página periodicamente para
          se manter informado sobre quaisquer mudanças.
        </p>
      </section>

      <section style={footerStyle}>
        <p>Para mais informações, entre em contato conosco.</p>
      </section>
    </div>
  );
};

export default Privacidade;
