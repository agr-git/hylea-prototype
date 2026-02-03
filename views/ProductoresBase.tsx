
import React from 'react';

const ProductoresBase: React.FC = () => {
  return (
    <div className="p-8 max-w-[1400px] mx-auto space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-end gap-6">
        <div>
          <h1 className="text-3xl font-black text-gray-900">Base Maestra de Productores</h1>
          <p className="text-gray-400 font-bold uppercase tracking-widest text-xs mt-1">Gestión administrativa de familias asociadas al pacto</p>
        </div>
        <div className="flex space-x-2">
           <button className="px-6 py-3 bg-gray-900 text-white font-black text-xs uppercase tracking-widest rounded-2xl shadow-xl">Exportar a Excel</button>
           <button className="px-6 py-3 bg-teal-600 text-white font-black text-xs uppercase tracking-widest rounded-2xl shadow-xl shadow-teal-600/20">+ Nuevo Productor</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
         {[
           { l: 'Total Productores', v: '1,234' },
           { l: 'Mujeres Líderes', v: '432' },
           { l: 'Hectáreas SAF', v: '2,450' },
           { l: 'Certificaciones', v: '15' },
         ].map((s, i) => (
           <div key={i} className="bg-white p-6 rounded-[32px] border border-gray-100 shadow-sm">
             <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">{s.l}</p>
             <p className="text-2xl font-black text-gray-900">{s.v}</p>
           </div>
         ))}
      </div>

      <div className="bg-white rounded-[40px] border border-gray-100 shadow-sm overflow-hidden">
        <div className="p-6 bg-gray-50 flex items-center justify-between border-b border-gray-100">
           <div className="flex items-center space-x-4">
              <input type="text" placeholder="Filtrar por nombre o finca..." className="bg-white border-none p-3 rounded-xl text-xs font-bold w-80 shadow-sm outline-none focus:ring-2 focus:ring-teal-500/20" />
              <select className="bg-white border-none p-3 rounded-xl text-xs font-bold shadow-sm outline-none">
                <option>Todos los Municipios</option>
                <option>Acevedo</option>
                <option>Neiva</option>
              </select>
           </div>
        </div>
        <table className="w-full text-left text-sm">
          <thead className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] bg-gray-50/50">
            <tr>
              <th className="px-8 py-6">Productor</th>
              <th className="px-8 py-6">Municipio / Finca</th>
              <th className="px-8 py-6">Cultivo</th>
              <th className="px-8 py-6">Hectáreas</th>
              <th className="px-8 py-6">Estado</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {[1,2,3,4,5].map(i => (
              <tr key={i} className="hover:bg-teal-50/30 transition-colors cursor-pointer group">
                <td className="px-8 py-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full bg-gray-100 overflow-hidden">
                       <img src={`https://picsum.photos/seed/p-${i}/100/100`} alt="User" />
                    </div>
                    <span className="font-bold text-gray-800">Alvaro Méndez {i}</span>
                  </div>
                </td>
                <td className="px-8 py-6 text-gray-500 font-medium">Acevedo / La Esperanza</td>
                <td className="px-8 py-6">
                  <span className="text-[10px] font-black text-amber-700 bg-amber-50 px-2 py-1 rounded">CAFÉ</span>
                </td>
                <td className="px-8 py-6 font-black text-gray-700">12.4</td>
                <td className="px-8 py-6">
                   <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductoresBase;
