
import React from 'react';
import { NavLink } from 'react-router-dom';

interface NavbarProps {
  isLoggedIn: boolean;
  setIsLoggedIn: (val: boolean) => void;
  onToggleFeedback: () => void;
  isFeedbackMode: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isLoggedIn, setIsLoggedIn, onToggleFeedback, isFeedbackMode }) => {
  const activeStyle = "text-teal-700 font-bold border-b-2 border-teal-600";
  const inactiveStyle = "text-gray-400 hover:text-teal-600 font-medium transition-colors border-b-2 border-transparent";

  return (
    <nav className="bg-white border-b border-gray-100 px-8 py-4 flex flex-col gap-4 sticky top-0 z-50 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-teal-600 rounded-xl flex items-center justify-center shadow-lg shadow-teal-600/20 text-white font-black italic text-xl">H</div>
          <div>
            <span className="text-xl font-black text-gray-900 tracking-tighter uppercase">Pacto <span className="text-teal-600">Hylea</span></span>
            <p className="text-[9px] text-gray-400 font-bold uppercase tracking-[0.2em] leading-none">Plataforma de Impacto</p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="flex items-center bg-gray-50 p-1 rounded-full border border-gray-100">
             <button 
              onClick={() => setIsLoggedIn(false)}
              className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase transition-all ${
                !isLoggedIn ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-400 hover:text-gray-600'
              }`}
             >
               Público
             </button>
             <button 
              onClick={() => setIsLoggedIn(true)}
              className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase transition-all ${
                isLoggedIn ? 'bg-teal-600 text-white shadow-md' : 'text-gray-400 hover:text-gray-600'
              }`}
             >
               Login ON
             </button>
          </div>
          <div className="w-10 h-10 rounded-xl bg-gray-100 border border-gray-200 overflow-hidden shadow-sm">
            <img src={`https://picsum.photos/seed/${isLoggedIn ? 'admin' : 'guest'}/100/100`} alt="User" />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-gray-50 pt-3">
        <div className="flex items-center space-x-8">
          <NavLink to="/inicio" className={({ isActive }) => `text-[10px] uppercase tracking-[0.2em] py-1 ${isActive ? activeStyle : inactiveStyle}`}>El Pacto</NavLink>
          <NavLink to="/territorio" className={({ isActive }) => `text-[10px] uppercase tracking-[0.2em] py-1 ${isActive ? activeStyle : inactiveStyle}`}>Territorio</NavLink>
          <NavLink to="/como-vamos" className={({ isActive }) => `text-[10px] uppercase tracking-[0.2em] py-1 ${isActive ? activeStyle : inactiveStyle}`}>Cómo Vamos</NavLink>
          <NavLink to="/proyectos" className={({ isActive }) => `text-[10px] uppercase tracking-[0.2em] py-1 ${isActive ? activeStyle : inactiveStyle}`}>Proyectos</NavLink>
          <NavLink to="/geoportal" className={({ isActive }) => `text-[10px] uppercase tracking-[0.2em] py-1 ${isActive ? activeStyle : inactiveStyle}`}>Geoportal</NavLink>
        </div>
        
        {isLoggedIn && (
          <div className="flex items-center space-x-6 border-l border-gray-100 pl-6 animate-in fade-in slide-in-from-right duration-500">
            <span className="text-[9px] font-black text-gray-300 uppercase tracking-widest mr-2">Gestión:</span>
            <NavLink to="/productores" className={({ isActive }) => `text-[10px] uppercase tracking-[0.2em] py-1 font-bold ${isActive ? 'text-teal-600' : 'text-gray-400 hover:text-teal-500'}`}>Productores</NavLink>
            <NavLink to="/admin" className={({ isActive }) => `text-[10px] uppercase tracking-[0.2em] py-1 font-bold ${isActive ? 'text-teal-600' : 'text-gray-400 hover:text-teal-500'}`}>Administración</NavLink>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
