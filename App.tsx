
import React, { useState } from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import InicioPacto from './views/InicioPacto';
import TerritorioView from './views/TerritorioView';
import ComoVamos from './views/ComoVamos';
import ProjectsImpact from './views/ProjectsImpact';
import GeoportalView from './views/GeoportalView';
import ProductoresBase from './views/ProductoresBase';
import AdministrationView from './views/AdministrationView';
import FeedbackOverlay from './components/FeedbackOverlay';

const App: React.FC = () => {
  // Login simulado: Controla el acceso a rutas privadas y la visibilidad de elementos en el Navbar
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isFeedbackMode, setIsFeedbackMode] = useState(false);

  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col bg-[#fcfcfc] text-gray-900 selection:bg-teal-100">
        {/* Fixed missing properties from type 'NavbarProps' */}
        <Navbar 
          isLoggedIn={isLoggedIn} 
          setIsLoggedIn={setIsLoggedIn} 
          isFeedbackMode={isFeedbackMode}
          onToggleFeedback={() => setIsFeedbackMode(!isFeedbackMode)}
        />
        
        <main className="flex-1 overflow-auto">
          <Routes>
            {/* Vistas Públicas: Siempre visibles */}
            <Route path="/inicio" element={<InicioPacto isLoggedIn={isLoggedIn} />} />
            <Route path="/territorio" element={<TerritorioView />} />
            <Route path="/como-vamos" element={<ComoVamos />} />
            <Route path="/proyectos" element={<ProjectsImpact />} />
            <Route path="/geoportal" element={<GeoportalView />} />

            {/* Vistas Privadas: Solo si isLoggedIn es true */}
            {isLoggedIn && (
              <>
                <Route path="/productores" element={<ProductoresBase />} />
                <Route path="/admin" element={<AdministrationView />} />
              </>
            )}

            {/* Redirección por defecto */}
            <Route path="/" element={<Navigate to="/inicio" replace />} />
            <Route path="*" element={<Navigate to="/inicio" replace />} />
          </Routes>
        </main>

        {isFeedbackMode && <FeedbackOverlay />}

        {/* Botón flotante para el UX Designer / PM */}
        <button 
          onClick={() => setIsFeedbackMode(!isFeedbackMode)}
          className={`fixed bottom-8 right-8 p-5 rounded-3xl shadow-2xl transition-all z-[9999] group ${
            isFeedbackMode ? 'bg-red-500 rotate-90' : 'bg-gray-900 hover:bg-teal-600'
          } text-white`}
          title="Activar Modo Feedback UX"
        >
          {isFeedbackMode ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <div className="flex items-center space-x-3">
               <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
               </svg>
               <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 whitespace-nowrap text-[10px] font-black uppercase tracking-widest">Feedback UX</span>
            </div>
          )}
        </button>
      </div>
    </HashRouter>
  );
};

export default App;