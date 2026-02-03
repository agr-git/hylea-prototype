
import React, { useState } from 'react';
import VistaVariables from './indicadores/VistaVariables';
import VistaContraste from './indicadores/VistaContraste';

const AnalysisHub: React.FC = () => {
  const [showAdvanced, setShowAdvanced] = useState(false);

  return (
    <div className="h-full flex flex-col">
      <div className="bg-white border-b border-gray-100 px-8 py-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-black text-gray-900">Análisis Profundo</h1>
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-1">Exploración técnica de variables e indicadores de sostenibilidad</p>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-3 bg-gray-50 p-2 rounded-2xl border border-gray-200">
            <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest pl-2">Modo Analista</span>
            <button 
              onClick={() => setShowAdvanced(!showAdvanced)}
              className={`relative inline-flex h-6 w-12 items-center rounded-full transition-colors focus:outline-none ${
                showAdvanced ? 'bg-teal-600' : 'bg-gray-200'
              }`}
            >
              <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                showAdvanced ? 'translate-x-7' : 'translate-x-1'
              }`} />
            </button>
          </div>
          <button className="bg-white border-2 border-gray-100 p-2 rounded-xl hover:bg-gray-50 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-auto bg-gray-50/50 p-8">
        {showAdvanced ? (
          <div className="space-y-8 animate-in fade-in duration-500">
             <div className="bg-amber-50 border border-amber-100 p-6 rounded-[32px] flex items-center space-x-6">
                <div className="w-12 h-12 bg-amber-100 rounded-2xl flex items-center justify-center text-amber-600 text-2xl">🧠</div>
                <div>
                   <h3 className="text-sm font-black text-amber-900 uppercase tracking-widest">Tutorial de Comparación Avanzada</h3>
                   <p className="text-xs text-amber-800 font-medium">Este gráfico de dispersión le permite identificar correlaciones entre dos variables. Los círculos más grandes representan mayor inversión presupuestal.</p>
                </div>
             </div>
             <VistaContraste />
          </div>
        ) : (
          <div className="animate-in slide-in-from-bottom-4 duration-500">
             <VistaVariables />
          </div>
        )}
      </div>
    </div>
  );
};

export default AnalysisHub;
