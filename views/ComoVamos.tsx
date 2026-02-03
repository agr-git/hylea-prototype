
import React from 'react';

const ComoVamos: React.FC = () => {
  const pilares = [
    {
      id: '01',
      pilar: 'Gobernanza y Territorio',
      desc: 'Fortalecimiento de mesas técnicas para la toma de decisiones basada en datos.',
      avance: 82,
      meta: '12 Mesas activas',
      img: 'https://images.unsplash.com/photo-1541872703-74c5e443d1fe?q=80&w=2000&auto=format&fit=crop',
      color: 'bg-teal-600'
    },
    {
      id: '02',
      pilar: 'Inclusión Productiva',
      desc: 'Transición a modelos agroforestales de café y cacao sostenible.',
      avance: 45,
      meta: '1,500 Fincas certificadas',
      img: 'https://images.unsplash.com/photo-1559535332-db997109045e?q=80&w=2000&auto=format&fit=crop',
      color: 'bg-amber-600'
    },
    {
      id: '03',
      pilar: 'Población Sostenible',
      desc: 'Mejora de la calidad de vida y tejido social en zonas rurales.',
      avance: 18,
      meta: '25K Habitantes impactados',
      img: 'https://images.unsplash.com/photo-1493673272479-a20888bcee10?q=80&w=2000&auto=format&fit=crop',
      color: 'bg-blue-600'
    }
  ];

  return (
    <div className="bg-[#fafafa] min-h-screen">
      <section className="py-32 px-12 text-center bg-white border-b border-gray-100">
         <div className="max-w-4xl mx-auto space-y-8">
            <span className="text-[10px] font-black text-teal-600 uppercase tracking-[0.3em] border border-teal-200 px-6 py-3 rounded-full">Reporte de Avance</span>
            <h1 className="text-6xl lg:text-8xl font-black text-gray-900 tracking-tight leading-none">Cómo <br/><span className="text-teal-600">Vamos</span></h1>
            <p className="text-xl text-gray-400 font-medium max-w-2xl mx-auto leading-relaxed">
              Descubre el impacto real a través de una navegación vertical por nuestros pilares estratégicos.
            </p>
         </div>
      </section>

      <div className="max-w-7xl mx-auto px-8 py-32 space-y-48">
        {pilares.map((p, i) => (
          <div key={p.id} className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-16 lg:gap-32`}>
            <div className="lg:w-1/2 relative group">
               <div className={`absolute -top-12 ${i % 2 === 0 ? '-left-12' : '-right-12'} text-[180px] font-black text-gray-100 z-0`}>{p.id}</div>
               <div className="relative z-10 rounded-[64px] overflow-hidden shadow-2xl border-8 border-white">
                  <img src={p.img} alt={p.pilar} className="w-full h-[550px] object-cover" />
               </div>
            </div>

            <div className="lg:w-1/2 space-y-10">
               <h3 className="text-5xl font-black text-gray-900 leading-tight tracking-tighter">{p.pilar}</h3>
               <p className="text-xl text-gray-500 leading-relaxed font-medium">{p.desc}</p>
               <div className="space-y-6 bg-white p-10 rounded-[40px] border border-gray-100 shadow-sm">
                  <div className="flex justify-between items-end">
                     <span className="text-sm font-black text-gray-400 uppercase tracking-widest">Progreso Global</span>
                     <span className="text-5xl font-black text-gray-900">{p.avance}%</span>
                  </div>
                  <div className="w-full h-4 bg-gray-100 rounded-full overflow-hidden shadow-inner">
                     <div className={`h-full ${p.color} rounded-full`} style={{ width: `${p.avance}%` }}></div>
                  </div>
                  <p className="text-xs font-bold text-gray-400 uppercase">Meta: {p.meta}</p>
               </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComoVamos;
