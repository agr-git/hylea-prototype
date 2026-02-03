
import React from 'react';

const GeoportalView: React.FC = () => {
  return (
    <div className="h-full flex flex-col bg-white">
      <div className="p-6 border-b border-gray-100 flex items-center justify-between">
         <div>
            <h1 className="text-xl font-black text-gray-900">Geoportal Pacto Hylea</h1>
            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Capas de información territorial e intervención</p>
         </div>
         <div className="flex space-x-2">
            <button className="px-4 py-2 bg-gray-900 text-white text-[10px] font-black uppercase rounded-xl">Descargar Capas (SHP)</button>
         </div>
      </div>
      
      <div className="flex-1 flex overflow-hidden">
         {/* Sidebar Layers */}
         <div className="w-80 bg-gray-50 border-r border-gray-100 overflow-y-auto p-6 space-y-8">
            <div className="space-y-4">
               <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Capas Activas</h4>
               <div className="space-y-2">
                  {['Límites Municipales', 'Cuencas Hidrográficas', 'Proyectos Vigentes', 'Deforestación 2024'].map(layer => (
                    <label key={layer} className="flex items-center space-x-3 bg-white p-3 rounded-xl border border-gray-200 cursor-pointer hover:border-teal-500 transition-colors">
                       <input type="checkbox" defaultChecked className="form-checkbox h-4 w-4 text-teal-600 rounded border-gray-300" />
                       <span className="text-xs font-bold text-gray-700">{layer}</span>
                    </label>
                  ))}
               </div>
            </div>

            <div className="p-4 bg-teal-50 rounded-2xl border border-teal-100">
               <p className="text-[10px] font-black text-teal-600 uppercase tracking-widest mb-1">Coordenadas</p>
               <p className="text-xs font-mono text-teal-800">Lat: 2.9273 | Long: -75.2818</p>
            </div>
         </div>

         {/* Map Canvas */}
         <div className="flex-1 relative bg-gray-200">
            <img src="https://picsum.photos/seed/geoportal/2000/1200" className="w-full h-full object-cover grayscale opacity-60" alt="Map View" />
            <div className="absolute inset-0 bg-teal-900/10 backdrop-blur-[1px]"></div>
            <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur p-6 rounded-3xl shadow-2xl border border-gray-200 flex justify-between items-center">
               <div className="flex space-x-8">
                  <div>
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Escala</p>
                    <p className="text-xs font-bold">1 : 50,000</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Datum</p>
                    <p className="text-xs font-bold">MAGNA-SIRGAS</p>
                  </div>
               </div>
               <div className="flex items-center space-x-2">
                  <div className="w-12 h-1 bg-teal-600 rounded"></div>
                  <span className="text-[10px] font-bold text-gray-500">500m</span>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
};

export default GeoportalView;
