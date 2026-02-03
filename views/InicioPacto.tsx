
import React, { useState } from 'react';
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis, Tooltip, Cell } from 'recharts';

interface Props {
  isLoggedIn?: boolean;
}

const InicioPacto: React.FC<Props> = ({ isLoggedIn }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 0,
      url: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2000&auto=format&fit=crop',
      titulo: 'Compromiso con la Amazonía',
      texto: 'El Pacto Hylea une a 12 municipios en una estrategia común para proteger el corredor Andino-Amazónico.'
    },
    {
      id: 1,
      url: 'https://images.unsplash.com/photo-1500631432427-464414f4209f?q=80&w=2000&auto=format&fit=crop',
      titulo: 'Transformación Productiva',
      texto: 'Fomentamos el café y cacao sostenible, integrando conservación de bosques con desarrollo rural.'
    }
  ];

  const chartData = [
    { municipio: 'Acevedo', valor: 450 },
    { municipio: 'Neiva', valor: 280 },
    { municipio: 'Pitalito', valor: 520 },
    { municipio: 'Garzón', valor: 190 },
    { municipio: 'Isnos', valor: 310 }
  ];

  return (
    <div className="flex flex-col h-full bg-white animate-in fade-in duration-700">
      <section className="flex flex-col lg:flex-row h-screen min-h-[650px] border-b border-gray-100">
        {/* IZQUIERDA: Narrativa Visual */}
        <div className="lg:w-3/5 relative overflow-hidden group">
          <img 
            src={slides[currentSlide].url} 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-[5s] scale-105 group-hover:scale-110" 
            alt="Narrativa"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-12 lg:p-24">
            <div className="max-w-2xl space-y-6">
              <span className="px-4 py-2 bg-teal-600/90 backdrop-blur text-white rounded-full text-[10px] font-black uppercase tracking-widest shadow-2xl">Propósito Hylea</span>
              <h1 className="text-5xl lg:text-7xl font-black text-white leading-tight tracking-tighter">
                {slides[currentSlide].titulo}
              </h1>
              <p className="text-lg lg:text-xl text-gray-200 font-medium leading-relaxed max-w-xl">
                {slides[currentSlide].texto}
              </p>
              <div className="flex items-center space-x-4 pt-8">
                {slides.map(s => (
                  <button 
                    key={s.id}
                    onClick={() => setCurrentSlide(s.id)}
                    className={`h-2 rounded-full transition-all duration-500 ${currentSlide === s.id ? 'w-20 bg-teal-400 shadow-[0_0_15px_rgba(45,212,191,0.5)]' : 'w-4 bg-white/30'}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* DERECHA: Datos Agregados (Simulación Power BI para el cliente) */}
        <div className="lg:w-2/5 p-10 bg-gray-50 flex flex-col border-l border-gray-100">
          <div className="flex items-center justify-between mb-12">
             <div>
                <h3 className="text-sm font-black text-gray-900 uppercase tracking-widest">Estado del Pacto</h3>
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-tighter">Resultados Consolidados</p>
             </div>
             <div className="px-4 py-2 bg-white rounded-2xl shadow-sm border border-gray-100 text-[10px] font-black text-teal-600 uppercase">
                2024 - Q4
             </div>
          </div>

          <div className="flex-1 space-y-8 overflow-y-auto pr-2 custom-scrollbar">
             <div className="grid grid-cols-2 gap-5">
                <div className="bg-white p-6 rounded-[32px] shadow-sm border border-gray-100 hover:border-teal-500 transition-all">
                   <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Productores</p>
                   <p className="text-3xl font-black text-gray-900 leading-none">1.2K</p>
                   <div className="mt-2 text-[9px] font-bold text-green-500">+12% vs 2023</div>
                </div>
                <div className="bg-white p-6 rounded-[32px] shadow-sm border border-gray-100 hover:border-teal-500 transition-all">
                   <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Inversión (M)</p>
                   <p className="text-3xl font-black text-gray-900 leading-none">$2.4</p>
                   <div className="mt-2 text-[9px] font-bold text-teal-600">Meta: 85%</div>
                </div>
             </div>

             <div className="bg-white p-8 rounded-[40px] border border-gray-100 shadow-sm flex flex-col min-h-[300px]">
                <h4 className="text-xs font-black text-gray-800 uppercase tracking-widest mb-8">Participación por Municipio</h4>
                <div className="flex-1">
                   <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={chartData} layout="vertical" margin={{ left: -10, right: 30 }}>
                         <XAxis type="number" hide />
                         <YAxis dataKey="municipio" type="category" axisLine={false} tickLine={false} tick={{fontSize: 11, fontWeight: 'bold', fill: '#94a3b8'}} />
                         <Tooltip cursor={{fill: '#f1f5f9'}} />
                         <Bar dataKey="valor" radius={[0, 8, 8, 0]}>
                            {chartData.map((entry, index) => (
                              <Cell key={index} fill={index === 2 ? '#0d9488' : '#cbd5e1'} />
                            ))}
                         </Bar>
                      </BarChart>
                   </ResponsiveContainer>
                </div>
             </div>

             <div className="p-8 bg-gray-900 rounded-[40px] text-white space-y-4">
                <p className="text-lg font-black leading-tight">Acceso Privado</p>
                <p className="text-xs text-gray-400 font-medium">Usa el botón de "Login ON" en el menú superior para ver la gestión de productores y administración.</p>
                {isLoggedIn && (
                   <div className="bg-teal-600/20 p-4 rounded-2xl border border-teal-600/30 text-teal-400 text-xs font-bold animate-pulse">
                     Sesión Administrativa Activa
                   </div>
                )}
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InicioPacto;
