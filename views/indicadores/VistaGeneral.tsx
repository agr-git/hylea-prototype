
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Legend } from 'recharts';

const data = [
  { year: '2018', value: 20 },
  { year: '2019', value: 45 },
  { year: '2020', value: 38 },
  { year: '2021', value: 65 },
  { year: '2022', value: 55 },
  { year: '2023', value: 85 },
  { year: '2024', value: 72 },
];

const VistaGeneral: React.FC = () => {
  return (
    <div className="p-8 max-w-[1400px] mx-auto space-y-8">
      <div className="bg-white rounded-3xl overflow-hidden shadow-xl flex flex-col md:flex-row min-h-[400px] border border-gray-100">
        <div className="md:w-1/2 p-12 flex flex-col justify-center space-y-6">
          <div className="inline-block px-3 py-1 bg-teal-50 text-teal-600 text-[10px] font-bold tracking-widest uppercase rounded-full w-fit">
            Corredor Andino-Amazónico
          </div>
          <h1 className="text-5xl font-black text-gray-900 leading-tight">HYLEA <br/><span className="text-teal-600">PLATFORM</span></h1>
          <p className="text-lg text-gray-500 max-w-md leading-relaxed">
            Este dashboard integra información socioeconómica y productiva con el fin de apoyar la toma de decisiones, el seguimiento de intervenciones y el análisis comparativo entre territorios.
          </p>
          <div className="pt-4 flex gap-4">
            <button className="px-8 py-3 bg-teal-600 text-white font-bold rounded-xl shadow-lg shadow-teal-100 hover:translate-y-[-2px] transition-all">Explorar Datos</button>
            <button className="px-8 py-3 bg-white border border-gray-200 text-gray-600 font-bold rounded-xl hover:bg-gray-50 transition-all">Metodología</button>
          </div>
        </div>
        <div className="md:w-1/2 relative bg-gray-100 group">
          <img 
            src="https://picsum.photos/seed/amazon/800/600" 
            className="w-full h-full object-cover grayscale-0 group-hover:scale-105 transition-transform duration-1000" 
            alt="Nature" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent"></div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
           <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Evolución del Indicador</h3>
           <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorVal" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#0d9488" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#0d9488" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="year" hide />
                <Tooltip />
                <Area type="monotone" dataKey="value" stroke="#0d9488" strokeWidth={3} fillOpacity={1} fill="url(#colorVal)" />
              </AreaChart>
            </ResponsiveContainer>
           </div>
           <div className="mt-4 flex items-center justify-between">
              <span className="text-3xl font-black text-gray-900">85.4%</span>
              <span className="text-xs font-bold text-green-500 bg-green-50 px-2 py-1 rounded">+12.4%</span>
           </div>
        </div>

        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
           <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Meta vs Real</h3>
           <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data.slice(-5)}>
                <XAxis dataKey="year" hide />
                <Bar dataKey="value" fill="#0d9488" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
           </div>
           <div className="mt-4 flex items-center justify-between">
              <span className="text-3xl font-black text-gray-900">360 <span className="text-sm font-normal text-gray-400">Ha</span></span>
              <span className="text-xs font-bold text-teal-600 bg-teal-50 px-2 py-1 rounded">Objetivo Alcanzado</span>
           </div>
        </div>

        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
           <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Cobertura Forestal</h3>
           <div className="space-y-4">
             {[
               { name: 'Neiva', val: 75, color: 'bg-teal-500' },
               { name: 'Acevedo', val: 42, color: 'bg-teal-300' },
               { name: 'Pitalito', val: 91, color: 'bg-teal-700' },
               { name: 'Garzón', val: 28, color: 'bg-teal-200' },
             ].map((m, i) => (
               <div key={i} className="space-y-1">
                 <div className="flex justify-between text-xs font-bold">
                   <span className="text-gray-600">{m.name}</span>
                   <span className="text-gray-900">{m.val}%</span>
                 </div>
                 <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                   <div className={`${m.color} h-full`} style={{ width: `${m.val}%` }}></div>
                 </div>
               </div>
             ))}
           </div>
        </div>
      </div>
    </div>
  );
};

export default VistaGeneral;
