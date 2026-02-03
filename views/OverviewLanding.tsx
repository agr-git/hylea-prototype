
import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import InfoTooltip from '../components/InfoTooltip';

const OverviewLanding: React.FC = () => {
  const [municipio, setMunicipio] = useState('Acevedo');

  const stats = [
    { label: 'Productores de Café/Cacao', val: '1,234', source: 'DANE Censo 2025', desc: 'Número total de familias registradas en el programa de fomento productivo.' },
    { label: 'Hectáreas en Conservación', val: '5,678', source: 'IGAC / Geoportal Hylea', desc: 'Superficie total de bosque nativo protegida por acuerdos de conservación.' },
    { label: 'Inversión Ejecutada', val: '$2.4M', source: 'Gobernación Huila', desc: 'Presupuesto total invertido en proyectos vigentes en este territorio.' },
    { label: 'Municipios Activos', val: '12', source: 'Pacto Hylea Admin', desc: 'Entidades territoriales que han firmado y ratificado el pacto de sostenibilidad.' },
  ];

  return (
    <div className="p-8 max-w-[1600px] mx-auto space-y-8">
      {/* Narrative Context Section */}
      <div className="bg-white p-12 rounded-[48px] border border-gray-100 shadow-sm flex flex-col lg:flex-row items-center gap-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-teal-50/50 rounded-bl-[200px] -z-10"></div>
        <div className="lg:w-3/5 space-y-6">
          <div className="inline-flex items-center space-x-2 bg-teal-50 px-4 py-2 rounded-full border border-teal-100">
             <span className="relative flex h-3 w-3">
               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
               <span className="relative inline-flex rounded-full h-3 w-3 bg-teal-500"></span>
             </span>
             <span className="text-[10px] font-black text-teal-700 uppercase tracking-widest">En vivo: 12 Municipios Monitoreados</span>
          </div>
          <h1 className="text-6xl font-black text-gray-900 leading-tight">Paisaje del <br/><span className="text-teal-600">Pacto Hylea</span></h1>
          <p className="text-xl text-gray-400 font-medium max-w-2xl leading-relaxed">
            Una plataforma para monitorear el desarrollo sostenible del café y cacao a través de 12 municipios en el Corredor Andino-Amazónico.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
             <button className="px-8 py-4 bg-gray-900 text-white font-black rounded-2xl shadow-xl hover:-translate-y-1 transition-all active:scale-95">Ver Proyectos de Impacto</button>
             <button className="px-8 py-4 bg-white border-2 border-gray-100 text-gray-600 font-black rounded-2xl hover:bg-gray-50 transition-all">Explorar Indicadores</button>
          </div>
        </div>
        <div className="lg:w-2/5 grid grid-cols-2 gap-4 w-full">
           {stats.map((s, i) => (
             <div key={i} className="bg-gray-50/50 p-6 rounded-[32px] border border-gray-100 group hover:bg-white hover:shadow-xl hover:border-teal-100 transition-all">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{s.label}</p>
                  <InfoTooltip description={s.desc} source={s.source} />
                </div>
                <p className="text-3xl font-black text-gray-900 tracking-tight">{s.val}</p>
                <p className="text-[9px] font-bold text-gray-400 mt-2 uppercase tracking-tighter">Fuente: {s.source}</p>
             </div>
           ))}
        </div>
      </div>

      {/* Main Interactive Map & Municipal Stats */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 items-start">
        {/* Map View */}
        <div className="xl:col-span-2 bg-white rounded-[48px] border border-gray-100 shadow-sm overflow-hidden h-[700px] flex flex-col">
          <div className="p-8 border-b border-gray-50 flex items-center justify-between">
            <div>
              <h3 className="text-xl font-black text-gray-900">Cobertura Territorial</h3>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Visualización satelital y capas de impacto</p>
            </div>
            <div className="flex space-x-2">
               {['Satelital', 'Topográfico', 'Deforestación'].map(layer => (
                 <button key={layer} className="px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest border border-gray-100 hover:bg-gray-50 transition-colors">{layer}</button>
               ))}
            </div>
          </div>
          <div className="flex-1 bg-gray-50 relative group cursor-grab active:cursor-grabbing">
             <img src="https://picsum.photos/seed/amazon-map-v2/1600/900" className="w-full h-full object-cover grayscale opacity-40" alt="Map" />
             <div className="absolute inset-0 bg-gradient-to-t from-white/80 to-transparent"></div>
             
             {/* Simple Simulated Map Marker */}
             <div className="absolute top-1/2 left-1/2 bg-teal-600 w-4 h-4 rounded-full shadow-2xl animate-pulse -translate-x-1/2 -translate-y-1/2 border-4 border-white"></div>
             
             <div className="absolute bottom-8 right-8 bg-white p-4 rounded-2xl shadow-2xl border border-gray-100">
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Ficha Rápida</p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center text-teal-600 text-xl font-bold">A</div>
                  <div>
                    <p className="text-sm font-black text-gray-900">Municipio Acevedo</p>
                    <p className="text-xs font-bold text-teal-600">85% Cobertura Boscosa</p>
                  </div>
                </div>
             </div>
          </div>
        </div>

        {/* Dynamic Sidebar Filters & List */}
        <div className="bg-white rounded-[48px] border border-gray-100 shadow-sm p-8 space-y-8">
           <div className="space-y-4">
              <h4 className="text-sm font-black text-gray-900 uppercase tracking-widest">Seleccionar Municipio</h4>
              <div className="relative">
                <select 
                  className="w-full appearance-none bg-gray-50 border-none p-5 rounded-2xl font-bold text-gray-700 outline-none focus:ring-4 focus:ring-teal-100 transition-all cursor-pointer"
                  value={municipio}
                  onChange={(e) => setMunicipio(e.target.value)}
                >
                  <option>Acevedo</option>
                  <option>Neiva</option>
                  <option>Pitalito</option>
                  <option>Garzón</option>
                  <option>Isnos</option>
                </select>
                <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                   </svg>
                </div>
              </div>
           </div>

           <div className="bg-teal-600 p-8 rounded-[32px] text-white shadow-2xl shadow-teal-600/30">
              <p className="text-[10px] font-black uppercase tracking-widest opacity-60 mb-2">Resumen Municipal: {municipio}</p>
              <div className="space-y-6">
                 <div>
                   <p className="text-4xl font-black">26.4K</p>
                   <p className="text-xs font-bold opacity-80">Habitantes Rurales</p>
                 </div>
                 <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/20">
                    <div>
                      <p className="text-xl font-black">8.2K</p>
                      <p className="text-[10px] font-bold opacity-60">Ha Café</p>
                    </div>
                    <div>
                      <p className="text-xl font-black">342</p>
                      <p className="text-[10px] font-bold opacity-60">Productores</p>
                    </div>
                 </div>
              </div>
           </div>

           <div className="space-y-4 pt-4">
              <h4 className="text-sm font-black text-gray-900 uppercase tracking-widest">Evolución Histórica</h4>
              <div className="h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={[{n:'20', v:40},{n:'21', v:65},{n:'22', v:55},{n:'23', v:85},{n:'24', v:72}]}>
                    <Bar dataKey="v" fill="#0d9488" radius={[4, 4, 0, 0]} />
                    <Tooltip cursor={{fill: 'transparent'}} contentStyle={{border: 'none', borderRadius: '12px', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)'}} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <p className="text-[10px] text-gray-400 font-bold text-center uppercase tracking-widest">Inversión en fomento (M USD)</p>
           </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewLanding;
