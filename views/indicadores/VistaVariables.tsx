
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { year: '2020', val: 10 },
  { year: '2021', val: 18 },
  { year: '2022', val: 15 },
  { year: '2023', val: 25 },
  { year: '2024', val: 21 },
];

const VistaVariables: React.FC = () => {
  return (
    <div className="p-6 flex flex-col md:flex-row gap-8">
      <div className="md:w-80 shrink-0 space-y-6">
        <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
          <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-6">Selección de Pilares</h3>
          <div className="space-y-2">
            {[
              '1. Gobernanza y Territorio',
              '2. Inclusión productiva',
              '3. Población sostenible',
              '4. Protección Biodiversidad',
              '5. Fuentes acordadas'
            ].map((p, i) => (
              <button 
                key={i} 
                className={`w-full text-left p-3 rounded-xl text-xs font-bold transition-all ${
                  i === 1 ? 'bg-teal-600 text-white shadow-lg' : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                }`}
              >
                {p}
              </button>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
          <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-4">Filtrar Indicador</h3>
          <input 
            type="text" 
            placeholder="Buscar variable..." 
            className="w-full bg-gray-50 border-none p-3 rounded-xl text-xs outline-none focus:ring-2 focus:ring-teal-500/20"
          />
        </div>
      </div>

      <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-6 auto-rows-[300px]">
        {[
          'Área Cosechada (Ton/Ha)',
          'Área Sembrada (Ha)',
          'Producción total',
          'Rendimiento regional',
          'Uso de fertilizantes',
          'Crédito agropecuario'
        ].map((title, i) => (
          <div key={i} className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm hover:shadow-xl transition-shadow flex flex-col">
            <div className="flex items-center justify-between mb-4">
               <h4 className="text-sm font-black text-gray-800">{title}</h4>
               <span className="text-[10px] font-bold text-teal-600 bg-teal-50 px-2 py-1 rounded">2024</span>
            </div>
            <div className="flex-1">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f8fafc" />
                  <XAxis dataKey="year" axisLine={false} tickLine={false} tick={{ fontSize: 10 }} />
                  <YAxis hide />
                  <Tooltip contentStyle={{ border: 'none', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                  <Line type="monotone" dataKey="val" stroke="#0d9488" strokeWidth={3} dot={{ r: 4, fill: '#0d9488' }} activeDot={{ r: 6 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VistaVariables;
