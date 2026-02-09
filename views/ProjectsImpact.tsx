
import React, { useState } from 'react';
import InfoTooltip from '../components/InfoTooltip';

interface Project {
  id: string;
  name: string;
  institution: string;
  budget: string;
  status: string;
  impacts: Array<{
    pillar: string;
    val: string;
    icon: string;
    color: string;
  }>;
  progress: number;
  lastUpdate: string;
  period: string;
  partners: string[];
  description: string;
  activities: string[];
  objectives: {
    general: string;
    specific: string[];
  };
  municipalities: string[];
  metrics: Array<{
    label: string;
    value: string;
    unit: string;
  }>;
}

const projectsData: Project[] = [
  {
    id: 'PJ-001',
    name: 'Restauración Cuenca Alta Hylea',
    institution: 'Fondo Amazonía',
    budget: '$450,000',
    status: 'Activo',
    impacts: [
      { pillar: 'Reforestación', val: '+120 Ha', icon: '🌲', color: 'bg-green-100 text-green-700' },
      { pillar: 'Biodiversidad', val: '+15 especies', icon: '🦜', color: 'bg-blue-100 text-blue-700' },
    ],
    progress: 65,
    lastUpdate: 'hace 2 días',
    period: '2024 - 2026',
    partners: ['IDH', 'Conservación Internacional', 'USAID'],
    description: 'Implementación de sistemas agroforestales con café y cacao en 8 municipios del corredor Andino-Amazónico.',
    activities: [
      'Capacitación en sistemas agroforestales',
      'Entrega de material vegetal',
      'Asistencia técnica continua',
      'Establecimiento de viveros comunitarios',
      'Certificación orgánica',
      'Acceso a mercados diferenciados'
    ],
    objectives: {
      general: 'Implementar sistemas agroforestales sostenibles que mejoren la productividad del café y cacao mientras restauran la cobertura forestal y conservan la biodiversidad en el corredor Andino-Amazónico.',
      specific: [
        'Incrementar rendimiento en 30% mediante prácticas agroforestales',
        'Restaurar 450 hectáreas con especies nativas',
        'Fortalecer capacidades de 320 productores',
        'Establecer esquemas de pago por servicios ambientales'
      ]
    },
    municipalities: [
      'San José del Fragua',
      'Belén de los Andaquíes',
      'Albania',
      'Curillo',
      'Solano',
      'Valparaíso',
      'Florencia',
      'Milán'
    ],
    metrics: [
      { label: '# Productores', value: '320', unit: 'beneficiarios' },
      { label: '# Mujeres Productoras', value: '142', unit: 'del proyecto' },
      { label: '# Ha con Mejoras Prácticas', value: '680', unit: 'hectáreas' },
      { label: '# Ha con Esquemas Conservación', value: '235', unit: 'hectáreas' },
      { label: '# Ha con Reforestación', value: '450', unit: 'hectáreas' }
    ]
  },
  {
    id: 'PJ-002',
    name: 'Café Circular Acevedo',
    institution: 'Gobernación Huila',
    budget: '$180,000',
    status: 'Activo',
    impacts: [
      { pillar: 'Ingreso Productor', val: '+22%', icon: '☕', color: 'bg-amber-100 text-amber-700' },
      { pillar: 'Suelos', val: 'Recuperado', icon: '🌱', color: 'bg-teal-100 text-teal-700' },
    ],
    progress: 32,
    lastUpdate: 'hace 1 semana',
    period: '2023 - 2025',
    partners: ['FNC', 'USAID', 'TechnoServe'],
    description: 'Fortalecimiento de cadenas de valor de cafés especiales con certificación de origen y comercio justo.',
    activities: [
      'Capacitación en beneficio de café especial',
      'Certificación de origen y calidad',
      'Desarrollo de marca colectiva',
      'Acceso a mercados internacionales',
      'Mejoramiento de infraestructura de beneficio',
      'Capacitación en catación'
    ],
    objectives: {
      general: 'Fortalecer la cadena de valor del café especial mediante la certificación de origen, mejoramiento de calidad y acceso a mercados diferenciados que garanticen precios justos para los productores.',
      specific: [
        'Certificar 180 productores en cafés especiales',
        'Incrementar ingresos en 22% mediante mercados diferenciados',
        'Establecer alianzas comerciales con tostadores internacionales',
        'Mejorar infraestructura de beneficio en 50 fincas'
      ]
    },
    municipalities: [
      'Acevedo',
      'Pitalito',
      'San Agustín',
      'Palestina'
    ],
    metrics: [
      { label: '# Productores', value: '180', unit: 'beneficiarios' },
      { label: '# Mujeres Productoras', value: '68', unit: 'del proyecto' },
      { label: '# Kg Café Especial', value: '45,000', unit: 'kg/año' },
      { label: '# Fincas Certificadas', value: '120', unit: 'fincas' },
      { label: '# Ha en Producción', value: '280', unit: 'hectáreas' }
    ]
  }
];

const ProjectsImpact: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const showList = () => {
    setSelectedProject(null);
    window.scrollTo(0, 0);
  };

  const showDetail = (project: Project) => {
    setSelectedProject(project);
    window.scrollTo(0, 0);
  };

  // Vista Detalle del Proyecto
  if (selectedProject) {
    return (
      <div className="min-h-screen bg-[#fcfcfc]">
        {/* Breadcrumb */}
        <div className="bg-white border-b border-gray-100 px-8 py-4">
          <div className="max-w-7xl mx-auto flex gap-2 items-center text-gray-600 text-xs font-bold uppercase tracking-widest">
            <button onClick={showList} className="text-teal-600 hover:underline">
              Proyectos
            </button>
            <span>›</span>
            <span className="text-gray-900">{selectedProject.name}</span>
          </div>
        </div>

        {/* Project Detail */}
        <div className="max-w-7xl mx-auto my-10 px-8">
          <div className="bg-white rounded-[40px] overflow-hidden shadow-xl border border-gray-100">
            {/* Header */}
            <div className="bg-gradient-to-r from-teal-600 to-teal-500 text-white p-10">
              <button
                onClick={showList}
                className="bg-white/20 border border-white/50 text-white px-5 py-2.5 rounded-2xl mb-6 hover:bg-white/30 transition-all inline-flex items-center gap-2 font-black text-xs uppercase tracking-widest"
              >
                ← Volver a proyectos
              </button>

              <h1 className="text-5xl font-black mb-6 tracking-tight">{selectedProject.name}</h1>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-8">
                <div>
                  <div className="text-xs font-black uppercase tracking-widest opacity-90">Inversión Total</div>
                  <div className="text-2xl font-black mt-1">{selectedProject.budget}</div>
                </div>
                <div>
                  <div className="text-xs font-black uppercase tracking-widest opacity-90">Periodo</div>
                  <div className="text-2xl font-black mt-1">{selectedProject.period}</div>
                </div>
                <div>
                  <div className="text-xs font-black uppercase tracking-widest opacity-90">Estado</div>
                  <div className="text-xs font-black uppercase bg-white/20 px-3 py-2 rounded-full inline-block mt-2">{selectedProject.status}</div>
                </div>
                <div>
                  <div className="text-xs font-black uppercase tracking-widest opacity-90 mb-3">Socios del Proyecto</div>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.partners.map((partner, i) => (
                      <span key={i} className="bg-white/20 px-3 py-1.5 rounded-full text-xs font-bold">
                        {partner}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Dashboard de 3 Columnas */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-10">
              {/* Columna Izquierda: Actividades */}
              <div className="lg:col-span-3 bg-gray-50 p-6 rounded-3xl border border-gray-100">
                <h3 className="text-xs font-black uppercase tracking-widest text-gray-900 mb-6">Actividades</h3>
                <ul className="space-y-3">
                  {selectedProject.activities.map((activity, i) => (
                    <li key={i} className="text-gray-600 text-sm font-bold border-b border-gray-200 pb-3 last:border-0">
                      <span className="text-teal-600 font-black mr-2">•</span>
                      {activity}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Columna Central: Objetivos y Mapa */}
              <div className="lg:col-span-6 space-y-8">
                <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
                  <h3 className="text-xs font-black uppercase tracking-widest text-gray-900 mb-4">Objetivo General</h3>
                  <p className="text-gray-700 font-bold leading-relaxed text-sm">
                    {selectedProject.objectives.general}
                  </p>

                  <h4 className="text-xs font-black uppercase tracking-widest text-gray-900 mt-8 mb-4">Objetivos Específicos</h4>
                  <div className="space-y-3">
                    {selectedProject.objectives.specific.map((obj, i) => (
                      <div key={i} className="text-gray-700 text-sm font-bold flex items-start gap-2">
                        <span className="text-teal-600 font-black mt-0.5">→</span>
                        <span>{obj}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
                  <h3 className="text-xs font-black uppercase tracking-widest text-gray-900 mb-4">Municipios Intervenidos</h3>
                  <div className="w-full h-72 bg-gradient-to-br from-teal-50 to-teal-100 rounded-3xl flex items-center justify-center text-6xl border-2 border-teal-200">
                    🗺️
                  </div>
                  <div className="flex flex-wrap gap-2 mt-6">
                    {selectedProject.municipalities.map((mun, i) => (
                      <span key={i} className="bg-teal-600 text-white px-4 py-2 rounded-full text-xs font-black uppercase tracking-wider">
                        {mun}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Columna Derecha: Métricas */}
              <div className="lg:col-span-3 space-y-4">
                <h3 className="text-xs font-black uppercase tracking-widest text-gray-900 mb-4">Información Binaria</h3>

                {selectedProject.metrics.map((metric, i) => (
                  <div key={i} className="bg-gray-50 p-5 rounded-3xl border-l-4 border-teal-600">
                    <div className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-2">{metric.label}</div>
                    <div>
                      <span className="text-3xl font-black text-teal-600">{metric.value}</span>
                      <span className="text-xs font-bold text-gray-500 ml-2">{metric.unit}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Galería de Fotos/Videos */}
            <div className="border-t border-gray-100 p-10">
              <h3 className="text-xs font-black uppercase tracking-widest text-gray-900 mb-6">Fotos y Videos</h3>
              <div className="flex gap-4 overflow-x-auto pb-4">
                {['📷', '📷', '📷', '▶️', '📷', '📁', '📷'].map((icon, i) => (
                  <div
                    key={i}
                    className={`min-w-[220px] h-44 rounded-3xl flex items-center justify-center text-6xl cursor-pointer hover:scale-105 transition-transform shadow-md ${
                      icon === '▶️'
                        ? 'bg-gradient-to-br from-teal-600 to-teal-500 text-white'
                        : 'bg-gradient-to-br from-gray-50 to-gray-100 border-2 border-gray-200'
                    }`}
                  >
                    {icon}
                  </div>
                ))}
              </div>
            </div>

            {/* Sección Footer con 2 Tarjetas */}
            <div className="border-t border-gray-100 bg-gray-50/50 p-10">
              <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {/* Tarjeta 1: Indicadores del Pacto */}
                <div className="bg-white rounded-3xl p-8 shadow-lg border-t-4 border-teal-600">
                  <h3 className="text-sm font-black uppercase tracking-widest text-center mb-2 text-gray-900">
                    Relación con Indicadores del Pacto
                  </h3>
                  <p className="text-center text-gray-500 text-xs font-bold mb-6">
                    Este proyecto contribuye a los siguientes indicadores del Pacto HYLEA
                  </p>
                  <div className="space-y-3">
                    <button className="w-full px-6 py-4 border-2 border-teal-600 text-teal-600 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-teal-600 hover:text-white transition-all">
                      📊 Productividad Cacao
                    </button>
                    <button className="w-full px-6 py-4 border-2 border-teal-600 text-teal-600 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-teal-600 hover:text-white transition-all">
                      🌱 CO2 Capturado
                    </button>
                  </div>
                </div>

                {/* Tarjeta 2: Documentación */}
                <div className="bg-white rounded-3xl p-8 shadow-lg border-t-4 border-gray-600">
                  <h3 className="text-sm font-black uppercase tracking-widest text-center mb-2 text-gray-900">
                    Documentación del Proyecto
                  </h3>
                  <p className="text-center text-gray-500 text-xs font-bold mb-6">
                    Accede a la información técnica y documentos del proyecto
                  </p>
                  <div className="space-y-3">
                    <button className="w-full px-6 py-4 border-2 border-gray-600 text-gray-600 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-gray-600 hover:text-white transition-all">
                      📋 Tabla Indicadores Específicos
                    </button>
                    <button className="w-full px-6 py-4 border-2 border-gray-600 text-gray-600 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-gray-600 hover:text-white transition-all">
                      📄 Nota Conceptual Proyecto
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Vista Lista de Proyectos (Original)
  return (
    <div className="p-8 max-w-7xl mx-auto space-y-10">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-4xl font-black text-gray-900 tracking-tight">Proyectos e Impacto</h1>
          <p className="text-gray-400 font-bold mt-2 uppercase tracking-widest text-xs">Monitoreo de contribución a los 4 pilares estratégicos</p>
        </div>
        <div className="flex bg-white p-2 rounded-2xl shadow-sm border border-gray-100">
           <div className="flex items-center space-x-3 px-4 py-2 bg-gray-50 rounded-xl border border-gray-200">
             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
             </svg>
             <input
              type="text"
              placeholder="Buscar proyecto..."
              className="bg-transparent border-none outline-none text-sm font-bold text-gray-700 w-64"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
             />
           </div>
           <button className="ml-2 px-6 py-3 bg-teal-600 text-white font-black rounded-xl hover:bg-teal-700 transition-all shadow-lg shadow-teal-600/20">Nuevo Proyecto</button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {projectsData.map((p, idx) => (
          <div
            key={idx}
            className="bg-white rounded-[40px] border border-gray-100 shadow-sm hover:shadow-xl transition-all p-8 flex flex-col xl:flex-row gap-10 group overflow-hidden relative cursor-pointer"
            onClick={() => showDetail(p)}
          >
            <div className="absolute top-0 left-0 w-2 h-full bg-teal-600"></div>

            {/* Project Identity */}
            <div className="xl:w-1/3 space-y-4">
              <div className="flex items-center space-x-2">
                <span className="text-[10px] font-black text-teal-600 bg-teal-50 px-2 py-1 rounded tracking-widest">{p.id}</span>
                <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Actualizado {p.lastUpdate}</span>
              </div>
              <h3 className="text-2xl font-black text-gray-900 leading-tight group-hover:text-teal-600 transition-colors">{p.name}</h3>
              <p className="text-sm font-bold text-gray-500">{p.institution}</p>
              <div className="pt-4 flex items-center space-x-6">
                 <div>
                   <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Presupuesto</p>
                   <p className="text-lg font-black text-gray-900">{p.budget}</p>
                 </div>
                 <div className="w-px h-8 bg-gray-100"></div>
                 <div>
                   <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Estado</p>
                   <p className="text-xs font-black text-teal-600 uppercase bg-teal-50 px-3 py-1 rounded-full">{p.status}</p>
                 </div>
              </div>
            </div>

            {/* Impact Contributions - EXPLICITLY SHOWING PILLARS */}
            <div className="xl:w-1/3 space-y-4">
              <h4 className="text-xs font-black text-gray-900 uppercase tracking-widest flex items-center">
                Contribución a Indicadores
                <InfoTooltip description="Muestra cómo este proyecto específico aporta numéricamente a los indicadores globales del Pacto." source="Reportes Técnicos 2025" />
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {p.impacts.map((imp, i) => (
                  <div key={i} className={`p-4 rounded-[24px] ${imp.color} flex flex-col items-center text-center space-y-1 border border-white/50`}>
                    <span className="text-2xl">{imp.icon}</span>
                    <p className="text-xs font-black uppercase tracking-tighter opacity-80">{imp.pillar}</p>
                    <p className="text-xl font-black">{imp.val}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Progress & Actions */}
            <div className="xl:w-1/3 flex flex-col justify-center space-y-6">
               <div className="space-y-2">
                 <div className="flex justify-between text-xs font-black text-gray-800 uppercase tracking-widest">
                   <span>Progreso Ejecución</span>
                   <span>{p.progress}%</span>
                 </div>
                 <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden p-1">
                   <div className="h-full bg-teal-600 rounded-full" style={{ width: `${p.progress}%` }}></div>
                 </div>
               </div>
               <div className="flex space-x-3">
                 <button
                   className="flex-1 py-4 bg-gray-50 text-gray-900 font-black text-xs uppercase tracking-widest rounded-2xl border border-gray-100 hover:bg-gray-100 transition-all"
                   onClick={(e) => {
                     e.stopPropagation();
                     showDetail(p);
                   }}
                 >
                   Ver Ficha Técnica
                 </button>
                 <button className="flex-1 py-4 bg-teal-600 text-white font-black text-xs uppercase tracking-widest rounded-2xl shadow-lg shadow-teal-600/10 hover:bg-teal-700 transition-all">Reporte Impacto</button>
               </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsImpact;
