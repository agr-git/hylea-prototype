
import React from 'react';

const GeoportalView: React.FC = () => {
  return (
    <div className="h-full flex flex-col bg-white overflow-hidden">
      <div className="p-6 border-b border-gray-100 flex items-center justify-between bg-white z-10 shadow-sm">
         <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-gray-900 rounded-xl flex items-center justify-center text-white">
               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
               </svg>
            </div>
            <div>
               <h1 className="text-xl font-black text-gray-900">Geoportal Hylea</h1>
               <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest leading-none mt-1">Sistemas de Información Geográfica v3.0</p>
            </div>
         </div>
         <div className="flex space-x-3">
            <button className="px-4 py-2 bg-gray-50 border border-gray-200 text-gray-500 text-[10px] font-black uppercase rounded-xl hover:bg-gray-100 transition-colors">Importar Capa</button>
            <button className="px-4 py-2 bg-teal-600 text-white text-[10px] font-black uppercase rounded-xl shadow-lg shadow-teal-600/20">Descargar Reporte</button>
         </div>
      </div>
      
      <div className="flex-1 flex overflow-hidden">
         {/* BARRA LATERAL DE CAPAS */}
         <div className="w-80 bg-gray-50 border-r border-gray-100 overflow-y-auto p-8 space-y-10 shadow-inner">
            <div className="space-y-6">
               <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-widest border-b border-gray-200 pb-2">Capas de Intervención</h4>
               <div className="space-y-3">
                  {[
                    { n: 'Límites Municipales', c: 'border-teal-500' },
                    { n: 'Cuencas Hidrográficas', c: 'border-blue-500' },
                    { n: 'Proyectos Activos', c: 'border-amber-500' },
                    { n: 'Productores Registrados', c: 'border-purple-500' },
                    { n: 'Deforestación 2024', c: 'border-red-500' }
                  ].map(layer => (
                    <label key={layer.n} className={`flex items-center space-x-4 bg-white p-4 rounded-2xl border-l-4 ${layer.c} shadow-sm cursor-pointer hover:shadow-md transition-all active:scale-95`}>
                       <input type="checkbox" defaultChecked className="form-checkbox h-4 w-4 text-teal-600 rounded-md border-gray-200" />
                       <span className="text-xs font-bold text-gray-700">{layer.n}</span>
                    </label>
                  ))}
               </div>
            </div>

            <div className="p-6 bg-teal-900 rounded-[32px] text-white space-y-3">
               <p className="text-[10px] font-black text-teal-400 uppercase tracking-widest">Coordenadas Actuales</p>
               <p className="text-xs font-mono">2°55'38.2"N 75°16'54.5"W</p>
               <div className="pt-2">
                  <div className="w-full h-1 bg-white/10 rounded-full">
                     <div className="w-2/3 h-full bg-teal-400 rounded-full"></div>
                  </div>
                  <p className="text-[9px] font-bold text-teal-300 mt-2 uppercase">Precisión Satelital: 1.2m</p>
               </div>
            </div>
         </div>

         {/* ÁREA DEL MAPA */}
         <div className="flex-1 relative bg-gray-100">
            {/* Simulación de Mapa */}
            <div className="absolute inset-0 overflow-hidden">
               <img 
                 src="https://picsum.photos/seed/hylea-map/2400/1600" 
                 className="w-full h-full object-cover grayscale opacity-50 blur-[1px]" 
                 alt="Base Map" 
               />
               <div className="absolute inset-0 bg-teal-900/5 mix-blend-overlay"></div>
            </div>

            {/* Marcadores Simulados */}
            <div className="absolute top-1/3 left-1/2 w-8 h-8 -translate-x-1/2 -translate-y-1/2">
               <div className="absolute inset-0 bg-teal-500 rounded-full animate-ping opacity-50"></div>
               <div className="absolute inset-2 bg-teal-600 rounded-full border-2 border-white shadow-xl"></div>
            </div>

            {/* Controles del Mapa */}
            <div className="absolute top-8 right-8 flex flex-col space-y-2">
               {['+', '-', '⌖'].map(btn => (
                 <button key={btn} className="w-10 h-10 bg-white shadow-xl rounded-xl font-bold text-gray-800 hover:bg-gray-50 flex items-center justify-center transition-all border border-gray-100">{btn}</button>
               ))}
            </div>

            {/* Widget Informativo Flotante */}
            <div className="absolute bottom-10 left-10 right-10 lg:left-auto lg:right-10 lg:w-96 bg-white/95 backdrop-blur-md p-8 rounded-[40px] shadow-2xl border border-gray-200/50 flex flex-col space-y-6 animate-in slide-in-from-right duration-700">
               <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-teal-100 rounded-3xl flex items-center justify-center text-teal-700 font-black text-xl">A</div>
                  <div>
                    <h4 className="text-lg font-black text-gray-900 leading-none">Municipio Acevedo</h4>
                    <p className="text-[10px] font-black text-teal-600 uppercase tracking-widest mt-1">Zona de alta prioridad</p>
                  </div>
               </div>
               <div className="grid grid-cols-2 gap-4 border-t border-gray-100 pt-6">
                  <div>
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Cobertura</p>
                    <p className="text-lg font-black text-gray-900">82.4%</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Alerta</p>
                    <p className="text-lg font-black text-red-500">Baja</p>
                  </div>
               </div>
               <button className="w-full py-4 bg-gray-900 text-white font-black text-[10px] uppercase tracking-[0.2em] rounded-2xl hover:bg-teal-700 transition-all">Ver Ficha Territorial</button>
            </div>

            {/* Leyenda Inferior Izquierda */}
            <div className="absolute bottom-10 left-10 hidden lg:flex bg-white/80 backdrop-blur p-4 rounded-2xl border border-white/50 space-x-6 shadow-sm">
               <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-teal-600 rounded-full"></div>
                  <span className="text-[10px] font-black text-gray-600 uppercase">Proyectos</span>
               </div>
               <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <span className="text-[10px] font-black text-gray-600 uppercase">Deforestación</span>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
};

export default GeoportalView;
