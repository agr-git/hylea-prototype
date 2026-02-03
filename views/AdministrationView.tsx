
import React from 'react';

const AdministrationView: React.FC = () => {
  return (
    <div className="p-8 max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-black text-gray-900 tracking-tight">Administración</h1>
        <p className="text-gray-500">Configuración global del sistema, gestión de usuarios y repositorios de datos.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="col-span-1 space-y-4">
          {[
            { id: 'usr', label: 'Gestión de Usuarios', icon: '👤', active: true },
            { id: 'rep', label: 'Repositorios', icon: '📦', active: false },
            { id: 'geo', label: 'Servidor Geo', icon: '🌐', active: false },
            { id: 'log', label: 'Logs de Sistema', icon: '📜', active: false },
            { id: 'set', label: 'Ajustes Generales', icon: '⚙️', active: false },
          ].map((item) => (
            <button 
              key={item.id}
              className={`w-full flex items-center space-x-4 p-4 rounded-2xl font-bold text-sm transition-all ${
                item.active ? 'bg-white shadow-xl shadow-teal-100 text-teal-600' : 'text-gray-400 hover:bg-white/50 hover:text-gray-600'
              }`}
            >
              <span className="text-xl">{item.icon}</span>
              <span>{item.label}</span>
            </button>
          ))}
        </div>

        <div className="col-span-1 md:col-span-2 space-y-6">
          <div className="bg-white rounded-[32px] p-8 shadow-sm border border-gray-100">
             <div className="flex justify-between items-center mb-8">
               <h2 className="text-xl font-black text-gray-900">Repositorios de datos</h2>
               <button className="bg-teal-600 text-white px-4 py-2 rounded-xl text-xs font-bold hover:bg-teal-700 transition-colors">+ Añadir Fuente</button>
             </div>
             
             <div className="space-y-4">
               {[
                 { name: 'Censo_Huila_2023.csv', type: 'CSV', status: 'Sync', size: '12.4 MB' },
                 { name: 'Deforestacion_Amazonia_Q1.geojson', type: 'GEOJSON', status: 'Sync', size: '45.1 MB' },
                 { name: 'Proyectos_V1_Final.xlsx', type: 'XLSX', status: 'Error', size: '2.1 MB' },
               ].map((repo, i) => (
                 <div key={i} className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl border border-gray-100 group">
                   <div className="flex items-center space-x-4">
                     <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm text-[10px] font-black text-gray-400">{repo.type}</div>
                     <div>
                       <p className="text-xs font-bold text-gray-800">{repo.name}</p>
                       <p className="text-[10px] text-gray-400">{repo.size}</p>
                     </div>
                   </div>
                   <div className="flex items-center space-x-4">
                     <span className={`text-[10px] font-bold px-2 py-1 rounded-full ${
                       repo.status === 'Sync' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                     }`}>{repo.status}</span>
                     <button className="text-gray-300 group-hover:text-red-400 transition-colors">
                       <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                       </svg>
                     </button>
                   </div>
                 </div>
               ))}
             </div>
          </div>

          <div className="bg-white rounded-[32px] p-8 shadow-sm border border-gray-100">
             <h2 className="text-xl font-black text-gray-900 mb-6">Estado de Conexión API</h2>
             <div className="flex items-center justify-between p-6 bg-teal-50 rounded-[24px] border border-teal-100">
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-teal-500 rounded-full animate-pulse shadow-lg shadow-teal-500/50"></div>
                  <div>
                    <p className="text-xs font-black text-teal-800 uppercase tracking-widest">Servicios Activos</p>
                    <p className="text-[10px] text-teal-600 font-medium">Latencia media: 142ms</p>
                  </div>
                </div>
                <div className="flex -space-x-2">
                   {[1,2,3,4].map(i => (
                     <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-teal-200 flex items-center justify-center text-[10px] font-bold text-teal-800">S{i}</div>
                   ))}
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdministrationView;
