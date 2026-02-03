
import React from 'react';

const GeodatosView: React.FC = () => {
  return (
    <div className="p-8 max-w-5xl mx-auto space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-black text-gray-900">Análisis Geodatos</h1>
          <p className="text-gray-500">Ejecuta consultas avanzadas sobre las capas geográficas y bases de datos alfanuméricas.</p>
        </div>
        <div className="flex space-x-2">
          <button className="px-4 py-2 bg-gray-900 text-white rounded-lg text-sm font-bold shadow-xl shadow-gray-200">Guardar Consulta</button>
        </div>
      </div>

      <div className="bg-[#1e293b] rounded-[32px] p-8 shadow-2xl border border-gray-800 relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-4">
           <span className="text-[10px] font-black text-teal-400 bg-teal-900/50 px-2 py-1 rounded">SQL ANALYTICS ENGINE</span>
        </div>
        <div className="space-y-4">
          <div className="flex items-center space-x-2 text-gray-500 font-mono text-xs">
            <span className="w-4 h-4 bg-red-400 rounded-full"></span>
            <span className="w-4 h-4 bg-yellow-400 rounded-full"></span>
            <span className="w-4 h-4 bg-green-400 rounded-full"></span>
            <span className="ml-4 tracking-widest uppercase">query_editor.sql</span>
          </div>
          <textarea 
            className="w-full bg-transparent border-none text-teal-300 font-mono text-lg resize-none outline-none min-h-[200px]"
            defaultValue={`SELECT municipio, SUM(area_ha) as total_bosque \nFROM geo_indicators \nWHERE year = 2024 \nGROUP BY municipio \nORDER BY total_bosque DESC;`}
          />
        </div>
        <div className="mt-8 flex justify-between items-center pt-8 border-t border-gray-700">
          <div className="flex space-x-6 text-[10px] font-bold text-gray-500 uppercase tracking-widest">
            <span>Resultados: 128 filas</span>
            <span>Tiempo: 0.42s</span>
          </div>
          <button className="bg-teal-500 hover:bg-teal-400 text-white px-8 py-3 rounded-2xl font-black transition-all shadow-xl shadow-teal-500/20 active:scale-95">EJECUTAR QUERY</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm">
           <h3 className="text-sm font-black text-gray-800 mb-4">Consultas Sugeridas</h3>
           <ul className="space-y-3">
             {[
               'Impacto por deforestación 2023',
               'Relación PIB vs Áreas protegidas',
               'Conectividad de cuencas alta/media',
               'Ranking de inversión municipal'
             ].map((q, i) => (
               <li key={i} className="flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-xl cursor-pointer group transition-colors">
                 <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-teal-100 transition-colors">
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400 group-hover:text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                   </svg>
                 </div>
                 <span className="text-xs font-bold text-gray-600 group-hover:text-gray-900">{q}</span>
               </li>
             ))}
           </ul>
        </div>
        <div className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm flex flex-col justify-center items-center text-center space-y-4">
           <div className="w-20 h-20 bg-teal-50 rounded-full flex items-center justify-center text-teal-600">
             <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
             </svg>
           </div>
           <div>
             <h4 className="font-black text-gray-900">Fuentes de Datos</h4>
             <p className="text-sm text-gray-400">32 capas de Geoserver conectadas actualmente.</p>
           </div>
           <button className="text-xs font-black text-teal-600 hover:underline">ADMINISTRAR CAPAS</button>
        </div>
      </div>
    </div>
  );
};

export default GeodatosView;
