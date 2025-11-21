import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Analytics } from "@vercel/analytics/react";
import { HelmetProvider, Helmet } from "react-helmet-async";

import Navbar from './Componentes/Navbar';
import Carrosel from './Componentes/Carrosel';
import Footer from './Componentes/Footer';
import Login from './Componentes/Login';
import Cadastro from './Componentes/Cadastro';
import Register from './Componentes/Register';
import Sobre from './Componentes/Sobre';
import GuiaSaude from './Componentes/GuiaSaude';
import HistoriaAutismo from './Componentes/HistoriaAutismo';
import Contato from './Componentes/Contato';
import ContatoProfissional from './Componentes/ContatoProfissional';
import SobreNos from './Componentes/SobreNos';
import Comunidade from './Componentes/Comunidade';
import TesteAutismo from './Componentes/TesteAutismo';
import Privacidade from './Componentes/Privacidade';
import DireitosAutorais from './Componentes/DireitosAutorais';
import Suporte from './Componentes/Suporte';
import FAQ from './Componentes/FAQ';
import Atendimentos from './Componentes/Atendimentos';
import Diagnostico from "./Componentes/Diagnostico";
//import Ads from './Componentes/Ads'; deixar ativado caso queira o ads fixo
import GuiaTEA from './Componentes/GuiaTEA';
import GuiaCategoria from './Componentes/GuiaCategoria';
import GuiaArtigo from './Componentes/GuiaArtigo';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div
          className="App"
          style={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
          }}
        >
          <Navbar />
          <div className="pt-[70px]">

            <Routes>
              {/* HOME */}
              <Route
                path="/"
                element={
                  <>
                    <Helmet>
                      <title>Portal TEA - Apoio a pais e cuidadores</title>
                      <meta
                        name="description"
                        content="O Portal TEA oferece informações, apoio e comunidade para pais e cuidadores de pessoas autistas."
                      />
                    </Helmet>

                    <Carrosel />
                    {/*<Ads /> adicionar se quiser o adsense fixo*/}
                  </>
                }
              />

              <Route path="/login" element={<Login />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/register" element={<Register />} />
              <Route path="/sobre" element={<Sobre />} />
              <Route path="/contato" element={<Contato />} />
              <Route path="/GuiaSaude" element={<GuiaSaude />} />
              <Route path="/Atendimentos" element={<Atendimentos />} />
              <Route path="/HistoriaAutismo" element={<HistoriaAutismo />} />
              <Route path="/ContatoProfissional" element={<ContatoProfissional />} />
              <Route path="/SobreNos" element={<SobreNos />} />
              <Route path="/Comunidade" element={<Comunidade />} />
              <Route path="/TesteAutismo" element={<TesteAutismo />} />
              <Route path="/Diagnostico" element={<Diagnostico />} />
              <Route path="/Privacidade" element={<Privacidade />} />
              <Route path="/DireitosAutorais" element={<DireitosAutorais />} />
              <Route path="/Suporte" element={<Suporte />} />
              <Route path="/FAQ" element={<FAQ />} />

              <Route path="/guiaTEA" element={<GuiaTEA />} />
              <Route path="/guia/:categoriaId" element={<GuiaCategoria />} />
              <Route path="/guia/artigo/:artigoId" element={<GuiaArtigo />} />

            </Routes>

          </div>

          <Footer />
          <Analytics />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
