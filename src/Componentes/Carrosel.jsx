import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import guiaData from '../data/guiaData';

import PortalTEA1 from '../Imagens/PortalTEA1.png';
import PortalTEA2 from '../Imagens/PortalTEA2.png';
import PortalTEA3 from '../Imagens/PortalTEA3.png';
import PortalTEA4 from '../Imagens/PortalTEA4.png';
import PortalTEA5 from '../Imagens/PortalTEA5.png';
import PortalTEA6 from '../Imagens/PortalTEA6.png';
import introImg from '../Imagens/categoria-introducao.jpg';
import artigoImg from '../Imagens/artigo2.jpg';
import comImg from '../Imagens/categoria-comunicacao.jpg';

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

      {/* Seção de Navegação Rápida */}
      <div className="mt-20" data-aos="fade-up">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">
          Explore o Portal TEA
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

          {/* Card 1 */}
          <a href="/guiaTEA" className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition block">
            <h3 className="text-xl font-bold mb-2 text-blue-600">Guia TEA</h3>
            <p className="text-gray-600">Conteúdos educativos organizados em categorias.</p>
          </a>

          {/* Card 2 */}
          <a href="/Comunidade" className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition block">
            <h3 className="text-xl font-bold mb-2 text-blue-600">Comunidade</h3>
            <p className="text-gray-600">Compartilhe experiências e ajude outras famílias.</p>
          </a>

          {/* Card 3 */}
          <a href="/TesteAutismo" className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition block">
            <h3 className="text-xl font-bold mb-2 text-blue-600">Teste Interativo</h3>
            <p className="text-gray-600">Ferramenta educativa para entender sinais.</p>
          </a>

          {/* Card 4 */}
          <a href="/ContatoProfissional" className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition block">
            <h3 className="text-xl font-bold mb-2 text-blue-600">Profissionais</h3>
            <p className="text-gray-600">Encontre terapeutas e especialistas.</p>
          </a>

          {/* Card 5 */}
          <a href="/Sobre" className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition block">
            <h3 className="text-xl font-bold mb-2 text-blue-600">Quem Somos</h3>
            <p className="text-gray-600">Conheça o propósito do Portal TEA.</p>
          </a>

          {/* Card 6 */}
          <a href="/FAQ" className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition block">
            <h3 className="text-xl font-bold mb-2 text-blue-600">Perguntas Frequentes</h3>
            <p className="text-gray-600">Tire dúvidas comuns sobre TEA.</p>
          </a>

        </div>
      </div>

{/* Artigos Recentes */}
<div className="mt-20" data-aos="fade-up">
  <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">
    Artigos Recentes
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

    {[introImg, artigoImg, comImg].map((img, index) => {
      const artigo = guiaData.artigos[index]; // pega cada artigo real

      return (
        <a
          key={index}
          href={`/guia/artigo/${artigo.id}`}
          className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition block"
        >
          <img
            src={img}
            alt={artigo.titulo}
            className="w-full h-48 object-cover"
          />

          <div className="p-5">
            <h3 className="font-bold text-lg mb-2 text-gray-800">{artigo.titulo}</h3>
            <p className="text-gray-600 text-sm">
              {artigo.conteudo.substring(0, 90)}...
            </p>
          </div>
        </a>
      );
    })}
  </div>
</div>



      {/* FAQ */}
      <div className="mt-20 mb-10" data-aos="fade-up">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
          Perguntas Frequentes
        </h2>

        <div className="space-y-4">

          <details className="bg-white p-4 rounded-xl shadow">
            <summary className="font-semibold cursor-pointer">O Portal TEA é gratuito?</summary>
            <p className="mt-2 text-gray-600">Sim, todo o conteúdo é totalmente gratuito.</p>
          </details>

          <details className="bg-white p-4 rounded-xl shadow">
            <summary className="font-semibold cursor-pointer">Os artigos são confiáveis?</summary>
            <p className="mt-2 text-gray-600">Sim, todos são revisados e baseados em fontes confiáveis.</p>
          </details>

          <details className="bg-white p-4 rounded-xl shadow">
            <summary className="font-semibold cursor-pointer">Posso enviar depoimentos?</summary>
            <p className="mt-2 text-gray-600">Sim! Basta acessar a área da Comunidade.</p>
          </details>

        </div>
      </div>

    </div>
  );
};

export default Carrosel;
