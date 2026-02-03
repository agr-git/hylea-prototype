
import React from 'react';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';
import VistaGeneral from './indicadores/VistaGeneral';
import VistaMunicipal from './indicadores/VistaMunicipal';
import VistaContraste from './indicadores/VistaContraste';
import VistaVariables from './indicadores/VistaVariables';

const IndicadoresPanel: React.FC = () => {
  const tabs = [
    { name: 'VISTA GENERAL', path: 'general' },
    { name: 'VISTA MUNICIPAL', path: 'municipal' },
    { name: 'VISTA CONTRASTE', path: 'contraste' },
    { name: 'VISTA VARIABLES', path: 'variables' },
    { name: 'VISTA PRODUCTOR', path: 'productor' },
  ];

  return (
    <div className="flex flex-col h-full">
      <div className="bg-white border-b border-gray-200 px-6 py-1 flex items-center justify-between">
        <div className="flex space-x-1">
          {tabs.map((tab) => (
            <NavLink
              key={tab.path}
              to={tab.path}
              className={({ isActive }) => `
                px-4 py-3 text-[11px] font-bold tracking-widest transition-all border-b-2
                ${isActive ? 'border-teal-600 text-teal-600' : 'border-transparent text-gray-400 hover:text-gray-600'}
              `}
            >
              {tab.name}
            </NavLink>
          ))}
        </div>
        <div className="flex items-center space-x-2">
           <span className="text-xs font-semibold text-gray-400 uppercase tracking-tighter">Panel de indicadores v2.4</span>
        </div>
      </div>

      <div className="flex-1 overflow-auto bg-gray-50">
        <Routes>
          <Route path="general" element={<VistaGeneral />} />
          <Route path="municipal" element={<VistaMunicipal />} />
          <Route path="contraste" element={<VistaContraste />} />
          <Route path="variables" element={<VistaVariables />} />
          <Route path="/" element={<Navigate to="general" replace />} />
        </Routes>
      </div>
    </div>
  );
};

export default IndicadoresPanel;
