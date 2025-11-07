import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// Certifique-se de que as imagens estejam na pasta correta
import PortalTEA1 from '../Imagens/PortalTEA1.png';
import PortalTEA2 from '../Imagens/PortalTEA2.png';
import PortalTEA3 from '../Imagens/PortalTEA3.png';

const images = [PortalTEA1, PortalTEA2, PortalTEA3];

const Carrosel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={styles.container}>
      {/* Seção 1: Carrossel e Texto */}
      <div style={styles.section}>
        <div style={styles.carousel}>
          <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              {images.map((image, index) => (
                <div className={`carousel-item ${index === currentIndex ? 'active' : ''}`} key={index}>
                  <img
                    className="d-block w-100"
                    src={image}
                    alt={`Slide ${index + 1}`}
                    style={styles.image}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div style={styles.textBox}>
          <h3 style={styles.title}>Sobre o PORTAL TEA</h3>
          <p style={styles.text}>
            O PORTAL TEA é uma plataforma dedicada a apoiar pais e cuidadores de pessoas com autismo. Oferece um espaço
            seguro para compartilhamento de experiências, acesso a recursos e interação com outros membros da
            comunidade.
          </p>
        </div>
      </div>

      {/* Seção 2: Outro Carrossel e Texto */}
      <div style={styles.section}>
        <div style={styles.textBox}>
          <h3 style={styles.title}>Recursos da Plataforma</h3>
          <p style={styles.text}>
            Explore ferramentas e informações sobre o autismo, participe de testes interativos e compartilhe suas
            experiências. Nosso objetivo é criar um ambiente de aprendizado e conexão.
          </p>
        </div>
        <div style={styles.carousel}>
          <div id="carouselExampleIndicators2" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              {images.map((image, index) => (
                <div className={`carousel-item ${index === currentIndex ? 'active' : ''}`} key={index}>
                  <img
                    className="d-block w-100"
                    src={image}
                    alt={`Slide ${index + 1}`}
                    style={styles.image}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Estilos
const styles = {
  container: {
    maxWidth: '1200px', // Largura fixa
    margin: '0 auto', // Centraliza na tela
    padding: '20px 15px',
  },
  section: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: '40px',
    gap: '20px',
    flexWrap: 'wrap', // Adapta em telas menores
  },
  carousel: {
    flex: 1,
    maxWidth: '600px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.15)',
    overflow: 'hidden',
  },
  textBox: {
    flex: 1,
    maxWidth: '600px',
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.15)',
  },
  title: {
    fontSize: '24px',
    marginBottom: '15px',
    color: '#333',
  },
  text: {
    fontSize: '16px',
    color: '#555',
    lineHeight: '1.6',
  },
  image: {
    width: '100%', // Largura ajustada ao carrossel
    height: '300px', // Altura fixa
    objectFit: 'cover', // Preenche o espaço da imagem sem distorcer
    borderRadius: '8px', // Opcional: arredonda os cantos
  },

};

export default Carrosel;
