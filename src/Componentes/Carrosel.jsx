import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

import PortalTEA1 from '../Imagens/PortalTEA1.png';
import PortalTEA2 from '../Imagens/PortalTEA2.png';
import PortalTEA3 from '../Imagens/PortalTEA3.png';
import PortalTEA4 from '../Imagens/PortalTEA4.png';
import PortalTEA5 from '../Imagens/PortalTEA5.png';
import PortalTEA6 from '../Imagens/PortalTEA6.png';

const imagesCarrossel1 = [PortalTEA1, PortalTEA2, PortalTEA3];
const imagesCarrossel2 = [PortalTEA4, PortalTEA5, PortalTEA6];

const Carrosel = () => {
  const [currentIndex1, setCurrentIndex1] = useState(0);
  const [currentIndex2, setCurrentIndex2] = useState(0);
  const [hover1, setHover1] = useState(false);
  const [hover2, setHover2] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  useEffect(() => {
    const interval1 = setInterval(() => {
      setCurrentIndex1((prev) => (prev + 1) % imagesCarrossel1.length);
    }, 3000);
    return () => clearInterval(interval1);
  }, []);

  useEffect(() => {
    const interval2 = setInterval(() => {
      setCurrentIndex2((prev) => (prev + 1) % imagesCarrossel2.length);
    }, 4000);
    return () => clearInterval(interval2);
  }, []);

  return (
    <div style={styles.container}>
      
      {/* Seção 1 */}
      <div style={styles.section} data-aos="fade-up">
        <div
          style={{ ...styles.carousel, ...(hover1 ? styles.carouselHover : {}) }}
          onMouseEnter={() => setHover1(true)}
          onMouseLeave={() => setHover1(false)}
        >
          <div id="carousel1" className="carousel slide" data-bs-ride="carousel">
            
            <div className="carousel-indicators">
              {imagesCarrossel1.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  data-bs-target="#carousel1"
                  data-bs-slide-to={index}
                  className={currentIndex1 === index ? 'active' : ''}
                  aria-current={currentIndex1 === index ? 'true' : 'false'}
                />
              ))}
            </div>

            <div className="carousel-inner">
              {imagesCarrossel1.map((image, index) => (
                <div
                  className={`carousel-item ${index === currentIndex1 ? 'active' : ''}`}
                  key={index}
                >
                  <img src={image} alt={`Slide ${index + 1}`} style={styles.image} className="d-block w-100" />
                </div>
              ))}
            </div>

            <button className="carousel-control-prev" type="button" data-bs-target="#carousel1" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carousel1" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>

          </div>
        </div>

        <div
          style={{ ...styles.textBox, ...(hover1 ? styles.textBoxHover : {}) }}
          onMouseEnter={() => setHover1(true)}
          onMouseLeave={() => setHover1(false)}
        >
          <h3 style={styles.title}>Sobre o PORTAL TEA</h3>
          <p style={styles.text}>
            O PORTAL TEA é uma plataforma dedicada a apoiar pais e cuidadores de pessoas com autismo. 
            Oferece um espaço seguro para compartilhamento de experiências e acesso a recursos educativos.
          </p>
        </div>
      </div>

      {/* Seção 2 */}
      <div style={styles.section} data-aos="fade-up">
        <div
          style={{ ...styles.textBox, ...(hover2 ? styles.textBoxHover : {}) }}
          onMouseEnter={() => setHover2(true)}
          onMouseLeave={() => setHover2(false)}
        >
          <h3 style={styles.title}>Recursos da Plataforma</h3>
          <p style={styles.text}>
            Explore ferramentas e informações sobre o autismo, participe de testes interativos e compartilhe suas experiências.
          </p>
        </div>

        <div
          style={{ ...styles.carousel, ...(hover2 ? styles.carouselHover : {}) }}
          onMouseEnter={() => setHover2(true)}
          onMouseLeave={() => setHover2(false)}
        >
          <div id="carousel2" className="carousel slide" data-bs-ride="carousel">

            <div className="carousel-indicators">
              {imagesCarrossel2.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  data-bs-target="#carousel2"
                  data-bs-slide-to={index}
                  className={currentIndex2 === index ? 'active' : ''}
                  aria-current={currentIndex2 === index ? 'true' : 'false'}
                />
              ))}
            </div>

            <div className="carousel-inner">
              {imagesCarrossel2.map((image, index) => (
                <div
                  className={`carousel-item ${index === currentIndex2 ? 'active' : ''}`}
                  key={index}
                >
                  <img src={image} alt={`Slide ${index + 1}`} style={styles.image} className="d-block w-100" />
                </div>
              ))}
            </div>

            <button className="carousel-control-prev" type="button" data-bs-target="#carousel2" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carousel2" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>

          </div>
        </div>
      </div>

    </div>
  );
};

const styles = {
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '40px 20px',
    fontFamily: "'Roboto', sans-serif",
    backgroundColor: '#f7f9fc',
  },
  section: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '30px',
    marginBottom: '60px',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  carousel: {
    flex: 1,
    maxWidth: '600px',
    borderRadius: '15px',
    overflow: 'hidden',
    boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    backgroundColor: '#fff',
  },
  carouselHover: {
    transform: 'translateY(-5px)',
    boxShadow: '0 12px 25px rgba(0,0,0,0.15)',
  },
  textBox: {
    flex: 1,
    maxWidth: '550px',
    backgroundColor: '#fff',
    padding: '25px 30px',
    borderRadius: '15px',
    boxShadow: '0 8px 20px rgba(0,0,0,0.08)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  },
  textBoxHover: {
    transform: 'translateY(-5px)',
    boxShadow: '0 12px 25px rgba(0,0,0,0.12)',
  },
  title: {
    fontSize: '26px',
    marginBottom: '20px',
    color: '#2c3e50',
    fontWeight: 700,
  },
  text: {
    fontSize: '17px',
    lineHeight: 1.8,
    color: '#4f5d75',
  },
  image: {
    width: '100%',
    height: '350px',
    objectFit: 'cover',
    borderRadius: '15px',
  },
};

export default Carrosel;
