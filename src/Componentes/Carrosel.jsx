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
    <div className="max-w-6xl mx-auto py-10 px-4">
      
      {/* Seção 1 */}
      <div className="flex flex-col md:flex-row items-center gap-8 mb-16" data-aos="fade-up">
        
        {/* Carrossel 1 */}
        <div className="flex-1 shadow-lg rounded-xl overflow-hidden transform transition-transform duration-300 hover:-translate-y-2">
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
                  <img
                    src={image}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-64 md:h-96 object-cover"
                  />
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

        {/* Texto Seção 1 */}
        <div className="flex-1 bg-white p-6 rounded-xl shadow-lg transform transition-transform duration-300 hover:-translate-y-2">
          <h3 className="text-2xl font-bold mb-4 text-gray-800">Sobre o PORTAL TEA</h3>
          <p className="text-gray-600 leading-relaxed">
            O PORTAL TEA é uma plataforma dedicada a apoiar pais e cuidadores de pessoas com autismo.
            Oferece um espaço seguro para compartilhamento de experiências e acesso a recursos educativos.
          </p>
        </div>
      </div>

      {/* Seção 2 */}
      <div className="flex flex-col md:flex-row items-center gap-8 mb-16" data-aos="fade-up">
        
        {/* Texto Seção 2 */}
        <div className="flex-1 bg-white p-6 rounded-xl shadow-lg transform transition-transform duration-300 hover:-translate-y-2">
          <h3 className="text-2xl font-bold mb-4 text-gray-800">Recursos da Plataforma</h3>
          <p className="text-gray-600 leading-relaxed">
            Explore ferramentas e informações sobre o autismo, participe de testes interativos e compartilhe suas experiências.
          </p>
        </div>

        {/* Carrossel 2 */}
        <div className="flex-1 shadow-lg rounded-xl overflow-hidden transform transition-transform duration-300 hover:-translate-y-2">
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
                  <img
                    src={image}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-64 md:h-96 object-cover"
                  />
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

export default Carrosel;
