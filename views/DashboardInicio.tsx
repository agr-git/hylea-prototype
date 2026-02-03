
import React from 'react';

const DashboardInicio: React.FC = () => {
  const metrics = [
    { label: 'Proyectos de SAF', value: '123', sub: '+12% este mes' },
    { label: 'Especies de SAF', value: '15', sub: 'Estable' },
    { label: 'SAF asociados', value: '19', sub: '+2 nuevos' },
    { label: 'Hectáreas de bosque SAF', value: '15.43', unit: 'Ha' },
    { label: 'Población total', value: '143.678', sub: 'Censo 2024' },
    { label: 'Número de asociaciones', value: '47', sub: 'En 12 municipios' },
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">Panel de Indicadores</h1>
        <div className="flex space-x-2">
          <button className="px-4 py-2 bg-white border border-gray-300 rounded-md text-sm font-medium hover:bg-gray-50 transition-colors">Exportar PDF</button>
          <button className="px-4 py-2 bg-teal-600 text-white rounded-md text-sm font-medium hover:bg-teal-700 transition-colors">Nuevo Reporte</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {metrics.map((m, idx) => (
          <div key={idx} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">{m.label}</p>
            <div className="mt-2 flex items-baseline">
              <span className="text-3xl font-bold text-gray-900">{m.value}</span>
              {m.unit && <span className="ml-1 text-lg font-medium text-gray-500">{m.unit}</span>}
            </div>
            {m.sub && <p className="mt-1 text-xs text-teal-600 font-medium">{m.sub}</p>}
          </div>
        ))}
      </div>

      <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm h-[600px] flex flex-col">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-800">Mapa Interactivo de Intervenciones</h3>
          <div className="flex space-x-2">
             <button className="p-2 hover:bg-gray-100 rounded">
               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
               </svg>
             </button>
          </div>
        </div>
        <div className="flex-1 bg-gray-50 rounded-lg border border-dashed border-gray-300 flex items-center justify-center overflow-hidden relative">
          <img 
            src="https://picsum.photos/seed/map/1200/800" 
            className="object-cover w-full h-full opacity-60 grayscale" 
            alt="Placeholder Map" 
          />
          <div className="absolute inset-0 flex items-center justify-center bg-white/20 backdrop-blur-[2px]">
            <div className="bg-white p-8 rounded-2xl shadow-2xl text-center max-w-md border border-gray-100">
               <div className="w-16 h-16 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                 </svg>
               </div>
               <h4 className="text-xl font-bold text-gray-900 mb-2">Visualizador Geográfico</h4>
               <p className="text-gray-500 text-sm">El mapa de Colombia y Amazonía está cargando las capas de deforestación, proyectos y cuencas hidrográficas...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardInicio;
