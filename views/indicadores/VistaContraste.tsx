
import React from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, ZAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = Array.from({ length: 50 }).map(() => ({
  x: Math.random() * 100,
  y: Math.random() * 100,
  z: Math.random() * 50,
  name: 'Municipio X'
}));

const VistaContraste: React.FC = () => {
  return (
    <div className="p-8 h-full flex flex-col space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-black text-gray-900">Análisis de Dispersión</h2>
          <p className="text-sm text-gray-500">Compara dos variables críticas para identificar outliers y tendencias regionales.</p>
        </div>
        <div className="flex space-x-4">
           <div className="bg-white p-2 rounded-xl border border-gray-200 shadow-sm flex items-center space-x-2">
             <span className="text-[10px] font-bold text-gray-400">EJE X:</span>
             <select className="text-xs font-bold text-teal-600 bg-transparent outline-none">
               <option>Hectáreas sembradas</option>
               <option>Inversión total</option>
             </select>
           </div>
           <div className="bg-white p-2 rounded-xl border border-gray-200 shadow-sm flex items-center space-x-2">
             <span className="text-[10px] font-bold text-gray-400">EJE Y:</span>
             <select className="text-xs font-bold text-teal-600 bg-transparent outline-none">
               <option>Rendimiento por Ha</option>
               <option>Población rural</option>
             </select>
           </div>
        </div>
      </div>

      <div className="flex-1 bg-white rounded-[40px] border border-gray-100 shadow-2xl p-12 relative">
        <ResponsiveContainer width="100%" height="100%">
          <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
            <XAxis type="number" dataKey="x" name="Hectáreas" unit="ha" axisLine={false} tickLine={false} />
            <YAxis type="number" dataKey="y" name="Rendimiento" unit="%" axisLine={false} tickLine={false} />
            <ZAxis type="number" dataKey="z" range={[50, 400]} name="Inversión" />
            <Tooltip cursor={{ strokeDasharray: '3 3' }} />
            <Scatter name="Proyectos" data={data} fill="#0d9488" fillOpacity={0.6} stroke="#0f766e" />
          </ScatterChart>
        </ResponsiveContainer>
        
        {/* Overlay Labels */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[10px] font-black tracking-widest text-gray-300 uppercase">Variable Independiente (Productividad)</div>
        <div className="absolute top-1/2 left-8 -rotate-90 -translate-y-1/2 text-[10px] font-black tracking-widest text-gray-300 uppercase">Variable Dependiente (Sostenibilidad)</div>
      </div>
    </div>
  );
};

export default VistaContraste;
