
import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const categories = ['Población', 'Economía', 'Medio ambiente', 'Vocación agrícola'];

const VistaMunicipal: React.FC = () => {
  const [activeCat, setActiveCat] = useState('Población');
  
  const chartData = [
    { name: 'Abejorral', value: 4500 },
    { name: 'Abriaquí', value: 2100 },
    { name: 'Alejandría', value: 3800 },
    { name: 'Amalfi', value: 7200 },
    { name: 'Andes', value: 9100 },
    { name: 'Anorí', value: 4800 },
  ];

  return (
    <div className="p-6 flex flex-col md:flex-row gap-6 h-full">
      {/* Sidebar Filters */}
      <div className="md:w-64 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-8">
        <div>
          <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 block">Municipio</label>
          <select className="w-full border border-gray-200 p-3 rounded-xl text-sm outline-none focus:ring-2 focus:ring-teal-500/20">
            <option>Acevedo</option>
            <option>Neiva</option>
            <option>Pitalito</option>
          </select>
        </div>
        
        <div>
          <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 block">Año</label>
          <select className="w-full border border-gray-200 p-3 rounded-xl text-sm outline-none focus:ring-2 focus:ring-teal-500/20">
            <option>2024</option>
            <option>2023</option>
            <option>2022</option>
          </select>
        </div>

        <div className="pt-6 border-t border-gray-100">
          <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-4">Información Territorial</p>
          <div className="bg-teal-50 p-4 rounded-xl border border-teal-100">
            <p className="text-[10px] text-teal-600 font-bold mb-1">Superficie</p>
            <p className="text-xl font-black text-teal-800">12.450 <span className="text-xs font-normal">km²</span></p>
          </div>
        </div>
      </div>

      {/* Main Analysis Content */}
      <div className="flex-1 space-y-6">
        <div className="flex items-center space-x-2 bg-white p-1 rounded-2xl border border-gray-100 shadow-sm w-fit">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCat(cat)}
              className={`px-6 py-2 rounded-xl text-xs font-bold transition-all ${
                activeCat === cat ? 'bg-teal-600 text-white shadow-lg shadow-teal-100' : 'text-gray-500 hover:bg-gray-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            { label: 'Población Total', val: '26.13K' },
            { label: 'Ranking regional', val: '#15' },
            { label: 'N° Mujeres', val: '12.61K' },
            { label: 'Hogares rurales', val: '383' },
          ].map((stat, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">{stat.label}</p>
              <p className="text-2xl font-black text-gray-800">{stat.val}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-[400px]">
          <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm flex flex-col">
            <h3 className="text-sm font-bold text-gray-800 mb-6">Proyección de población hasta 2042</h3>
            <div className="flex-1">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#999' }} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#999' }} />
                  <Tooltip cursor={{ fill: '#f8fafc' }} contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }} />
                  <Bar dataKey="value" fill="#0d9488" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm overflow-hidden relative group">
            <h3 className="text-sm font-bold text-gray-800 mb-6">Mapa de Densidad (Heatmap)</h3>
            <img src="https://picsum.photos/seed/heatmap/800/600" className="w-full h-full object-cover rounded-xl transition-transform group-hover:scale-105 duration-1000" alt="Heatmap" />
            <div className="absolute top-12 right-12 bg-white/90 backdrop-blur p-2 rounded-lg text-[10px] font-bold border border-gray-200">
               LEYENDA: ALTA DENSIDAD
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VistaMunicipal;
