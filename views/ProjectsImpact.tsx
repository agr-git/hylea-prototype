
import React, { useState } from 'react';
import InfoTooltip from '../components/InfoTooltip';

const ProjectsImpact: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const projects = [
    {
      id: 'PJ-001',
      name: 'Restauración Cuenca Alta Hylea',
      institution: 'Fondo Amazonía',
      budget: '$450,000',
      status: 'Activo',
      impacts: [
        { pillar: 'Reforestación', val: '+120 Ha', icon: '🌲', color: 'bg-green-100 text-green-700' },
        { pillar: 'Biodiversidad', val: '+15 especies', icon: '🦜', color: 'bg-blue-100 text-blue-700' },
      ],
      progress: 65,
      lastUpdate: 'hace 2 días'
    },
    {
      id: 'PJ-002',
      name: 'Café Circular Acevedo',
      institution: 'Gobernación Huila',
      budget: '$180,000',
      status: 'Activo',
      impacts: [
        { pillar: 'Ingreso Productor', val: '+22%', icon: '☕', color: 'bg-amber-100 text-amber-700' },
        { pillar: 'Suelos', val: 'Recuperado', icon: '🌱', color: 'bg-teal-100 text-teal-700' },
      ],
      progress: 32,
      lastUpdate: 'hace 1 semana'
    }
  ];

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-10">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-4xl font-black text-gray-900 tracking-tight">Proyectos e Impacto</h1>
          <p className="text-gray-400 font-bold mt-2 uppercase tracking-widest text-xs">Monitoreo de contribución a los 4 pilares estratégicos</p>
        </div>
        <div className="flex bg-white p-2 rounded-2xl shadow-sm border border-gray-100">
           <div className="flex items-center space-x-3 px-4 py-2 bg-gray-50 rounded-xl border border-gray-200">
             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
             </svg>
             <input 
              type="text" 
              placeholder="Buscar proyecto..." 
              className="bg-transparent border-none outline-none text-sm font-bold text-gray-700 w-64"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
             />
           </div>
           <button className="ml-2 px-6 py-3 bg-teal-600 text-white font-black rounded-xl hover:bg-teal-700 transition-all shadow-lg shadow-teal-600/20">Nuevo Proyecto</button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {projects.map((p, idx) => (
          <div key={idx} className="bg-white rounded-[40px] border border-gray-100 shadow-sm hover:shadow-xl transition-all p-8 flex flex-col xl:flex-row gap-10 group overflow-hidden relative">
            <div className="absolute top-0 left-0 w-2 h-full bg-teal-600"></div>
            
            {/* Project Identity */}
            <div className="xl:w-1/3 space-y-4">
              <div className="flex items-center space-x-2">
                <span className="text-[10px] font-black text-teal-600 bg-teal-50 px-2 py-1 rounded tracking-widest">{p.id}</span>
                <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Actualizado {p.lastUpdate}</span>
              </div>
              <h3 className="text-2xl font-black text-gray-900 leading-tight group-hover:text-teal-600 transition-colors">{p.name}</h3>
              <p className="text-sm font-bold text-gray-500">{p.institution}</p>
              <div className="pt-4 flex items-center space-x-6">
                 <div>
                   <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Presupuesto</p>
                   <p className="text-lg font-black text-gray-900">{p.budget}</p>
                 </div>
                 <div className="w-px h-8 bg-gray-100"></div>
                 <div>
                   <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Estado</p>
                   <p className="text-xs font-black text-teal-600 uppercase bg-teal-50 px-3 py-1 rounded-full">{p.status}</p>
                 </div>
              </div>
            </div>

            {/* Impact Contributions - EXPLICITLY SHOWING PILLARS */}
            <div className="xl:w-1/3 space-y-4">
              <h4 className="text-xs font-black text-gray-900 uppercase tracking-widest flex items-center">
                Contribución a Indicadores
                <InfoTooltip description="Muestra cómo este proyecto específico aporta numéricamente a los indicadores globales del Pacto." source="Reportes Técnicos 2025" />
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {p.impacts.map((imp, i) => (
                  <div key={i} className={`p-4 rounded-[24px] ${imp.color} flex flex-col items-center text-center space-y-1 border border-white/50`}>
                    <span className="text-2xl">{imp.icon}</span>
                    <p className="text-xs font-black uppercase tracking-tighter opacity-80">{imp.pillar}</p>
                    <p className="text-xl font-black">{imp.val}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Progress & Actions */}
            <div className="xl:w-1/3 flex flex-col justify-center space-y-6">
               <div className="space-y-2">
                 <div className="flex justify-between text-xs font-black text-gray-800 uppercase tracking-widest">
                   <span>Progreso Ejecución</span>
                   <span>{p.progress}%</span>
                 </div>
                 <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden p-1">
                   <div className="h-full bg-teal-600 rounded-full" style={{ width: `${p.progress}%` }}></div>
                 </div>
               </div>
               <div className="flex space-x-3">
                 <button className="flex-1 py-4 bg-gray-50 text-gray-900 font-black text-xs uppercase tracking-widest rounded-2xl border border-gray-100 hover:bg-gray-100 transition-all">Ver Ficha Técnica</button>
                 <button className="flex-1 py-4 bg-teal-600 text-white font-black text-xs uppercase tracking-widest rounded-2xl shadow-lg shadow-teal-600/10 hover:bg-teal-700 transition-all">Reporte Impacto</button>
               </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsImpact;
