
import React from 'react';

const TerritorioView: React.FC = () => {
  return (
    <div className="p-12 max-w-7xl mx-auto space-y-12">
      <div className="space-y-4">
        <h1 className="text-4xl font-black text-gray-900 tracking-tight">Indicadores <span className="text-teal-600">Territoriales</span></h1>
        <p className="text-lg text-gray-400 font-medium max-w-2xl">Datos secundarios que contextualizan el impacto del pacto a nivel municipal y regional.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { l: 'Población Rural', v: '26.1K', s: 'Censo 2025' },
          { l: 'Índice de Bosque', v: '85.2%', s: 'Ideam' },
          { l: 'PIB Agrícola', v: '12.4%', s: 'DANE' },
        ].map((s, i) => (
          <div key={i} className="bg-white p-8 rounded-[40px] border border-gray-100 shadow-sm space-y-2">
            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{s.l}</p>
            <p className="text-4xl font-black text-gray-900">{s.v}</p>
            <p className="text-[9px] font-bold text-teal-600 uppercase tracking-tighter">Fuente: {s.s}</p>
          </div>
        ))}
      </div>

      <div className="bg-gray-50 border-4 border-dashed border-gray-100 rounded-[56px] h-[600px] flex items-center justify-center p-20 text-center">
        <div className="max-w-md space-y-6">
           <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center text-teal-600 text-4xl mx-auto">🗺️</div>
           <h3 className="text-2xl font-black text-gray-900 leading-tight">Métricas Secundarias por Microcuenca</h3>
           <p className="text-gray-400 font-medium">Este módulo permitirá cruzar datos de sensores remotos con los registros de intervención del pacto para visualizar el cambio en tiempo real.</p>
        </div>
      </div>
    </div>
  );
};

export default TerritorioView;
