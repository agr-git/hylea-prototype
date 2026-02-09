import React, { useState } from 'react';

interface Project {
  id: number;
  title: string;
  icon: string;
  investment: string;
  beneficiaries: string;
  period: string;
  description: string;
  partners: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Agroforestería Sostenible',
    icon: '🌳',
    investment: '$450,000 USD',
    beneficiaries: '320 productores',
    period: '2024 - 2026',
    description: 'Implementación de sistemas agroforestales con café y cacao en 8 municipios del corredor Andino-Amazónico.',
    partners: ['IDH', 'Conservación Internacional', 'USAID']
  },
  {
    id: 2,
    title: 'Cafés Especiales de Origen',
    icon: '☕',
    investment: '$280,000 USD',
    beneficiaries: '180 productores',
    period: '2023 - 2025',
    description: 'Fortalecimiento de cadenas de valor de cafés especiales con certificación de origen y comercio justo.',
    partners: ['FNC', 'USAID', 'TechnoServe']
  },
  {
    id: 3,
    title: 'Cacao Amazónico Premium',
    icon: '🍫',
    investment: '$380,000 USD',
    beneficiaries: '245 productores',
    period: '2024 - 2027',
    description: 'Producción de cacao fino de aroma con prácticas regenerativas y acceso a mercados internacionales.',
    partners: ['IDH', 'Solidaridad', 'Luker Chocolate']
  },
  {
    id: 4,
    title: 'Conservación de Cuencas',
    icon: '💧',
    investment: '$520,000 USD',
    beneficiaries: '450 productores',
    period: '2023 - 2026',
    description: 'Protección y restauración de cuencas hídricas con sistemas productivos sostenibles.',
    partners: ['CI', 'Patrimonio Natural', 'GEF']
  }
];

const ProyectosTable: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const showList = () => {
    setSelectedProject(null);
    window.scrollTo(0, 0);
  };

  const showDetail = (project: Project) => {
    setSelectedProject(project);
    window.scrollTo(0, 0);
  };

  if (selectedProject) {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Breadcrumb */}
        <div className="bg-white border-b border-gray-200 px-8 py-4">
          <div className="max-w-7xl mx-auto flex gap-2 items-center text-gray-600 text-sm">
            <button onClick={showList} className="text-teal-600 hover:underline">
              Proyectos
            </button>
            <span>›</span>
            <span>{selectedProject.title}</span>
          </div>
        </div>

        {/* Project Detail */}
        <div className="max-w-7xl mx-auto my-8 px-8">
          <div className="bg-white rounded-xl overflow-hidden shadow-lg">
            {/* Header */}
            <div className="bg-gradient-to-r from-teal-600 to-teal-500 text-white p-8">
              <button
                onClick={showList}
                className="bg-white/20 border border-white/50 text-white px-4 py-2 rounded-lg mb-4 hover:bg-white/30 transition-all inline-flex items-center gap-2"
              >
                ← Volver a proyectos
              </button>

              <h1 className="text-4xl font-bold mb-6">{selectedProject.title}</h1>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
                <div>
                  <div className="text-sm opacity-90">Inversión Total</div>
                  <div className="text-xl font-semibold">{selectedProject.investment}</div>
                </div>
                <div>
                  <div className="text-sm opacity-90">Beneficiarios</div>
                  <div className="text-xl font-semibold">{selectedProject.beneficiaries}</div>
                </div>
                <div>
                  <div className="text-sm opacity-90">Periodo</div>
                  <div className="text-xl font-semibold">{selectedProject.period}</div>
                </div>
                <div>
                  <div className="text-sm opacity-90">Socios del Proyecto</div>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {selectedProject.partners.map((partner, i) => (
                      <span key={i} className="bg-white/20 px-3 py-1 rounded-full text-sm">
                        {partner}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Dashboard 3 Columns */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-8">
              {/* Left: Activities */}
              <div className="lg:col-span-3 bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4 text-gray-800">Actividades</h3>
                <ul className="space-y-3">
                  {[
                    'Capacitación en sistemas agroforestales',
                    'Entrega de material vegetal',
                    'Asistencia técnica continua',
                    'Establecimiento de viveros comunitarios',
                    'Certificación orgánica',
                    'Acceso a mercados diferenciados'
                  ].map((activity, i) => (
                    <li key={i} className="text-gray-600 text-sm border-b border-gray-200 pb-2">
                      <span className="text-teal-600 font-bold mr-2">•</span>
                      {activity}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Center: Objectives & Map */}
              <div className="lg:col-span-6 space-y-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-4 text-gray-800">Objetivo General</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Implementar sistemas agroforestales sostenibles que mejoren la productividad del café y cacao
                    mientras restauran la cobertura forestal y conservan la biodiversidad en el corredor Andino-Amazónico.
                  </p>

                  <h4 className="font-semibold mb-3 text-gray-800 mt-6">Objetivos Específicos</h4>
                  <div className="space-y-2">
                    {[
                      'Incrementar rendimiento en 30% mediante prácticas agroforestales',
                      'Restaurar 450 hectáreas con especies nativas',
                      'Fortalecer capacidades de 320 productores',
                      'Establecer esquemas de pago por servicios ambientales'
                    ].map((obj, i) => (
                      <div key={i} className="text-gray-600 text-sm">
                        <span className="text-teal-600 font-bold mr-2">→</span>
                        {obj}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-4 text-gray-800">Municipios Intervenidos</h3>
                  <div className="w-full h-64 bg-gradient-to-br from-teal-100 to-teal-200 rounded-lg flex items-center justify-center text-6xl">
                    🗺️
                  </div>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {[
                      'San José del Fragua',
                      'Belén de los Andaquíes',
                      'Albania',
                      'Curillo',
                      'Solano',
                      'Valparaíso',
                      'Florencia',
                      'Milán'
                    ].map((mun, i) => (
                      <span key={i} className="bg-teal-600 text-white px-3 py-1 rounded-full text-sm">
                        {mun}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right: Metrics */}
              <div className="lg:col-span-3 space-y-4">
                <h3 className="text-lg font-semibold mb-4 text-gray-800">Información Binaria</h3>

                {[
                  { label: '# Productores', value: '320', unit: 'beneficiarios' },
                  { label: '# Mujeres Productoras', value: '142', unit: 'del proyecto' },
                  { label: '# Ha con Mejoras Prácticas', value: '680', unit: 'hectáreas' },
                  { label: '# Ha con Esquemas Conservación', value: '235', unit: 'hectáreas' },
                  { label: '# Ha con Reforestación', value: '450', unit: 'hectáreas' }
                ].map((metric, i) => (
                  <div key={i} className="bg-gray-50 p-4 rounded-lg border-l-4 border-teal-600">
                    <div className="text-sm text-gray-600 mb-1">{metric.label}</div>
                    <div>
                      <span className="text-2xl font-bold text-teal-600">{metric.value}</span>
                      <span className="text-sm text-gray-600 ml-1">{metric.unit}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Gallery */}
            <div className="border-t border-gray-200 p-8">
              <h3 className="text-lg font-semibold mb-4 text-gray-800">Fotos y Videos</h3>
              <div className="flex gap-4 overflow-x-auto pb-4">
                {['📷', '📷', '📷', '▶️', '📷', '📁', '📷'].map((icon, i) => (
                  <div
                    key={i}
                    className={`min-w-[200px] h-40 rounded-lg flex items-center justify-center text-5xl cursor-pointer hover:scale-105 transition-transform ${
                      icon === '▶️'
                        ? 'bg-gradient-to-br from-teal-600 to-teal-500 text-white'
                        : 'bg-gradient-to-br from-teal-100 to-teal-200'
                    }`}
                  >
                    {icon}
                  </div>
                ))}
              </div>
            </div>

            {/* Footer Cards */}
            <div className="border-t border-gray-200 bg-gray-50 p-8">
              <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {/* Indicators Card */}
                <div className="bg-white rounded-xl p-8 shadow-md border-t-4 border-teal-600">
                  <h3 className="text-lg font-semibold text-center mb-2">
                    Relación con Indicadores del Pacto
                  </h3>
                  <p className="text-center text-gray-600 text-sm mb-6">
                    Este proyecto contribuye a los siguientes indicadores del Pacto HYLEA
                  </p>
                  <div className="space-y-3">
                    <button className="w-full px-6 py-3 border-2 border-teal-600 text-teal-600 rounded-lg font-semibold hover:bg-teal-600 hover:text-white transition-all">
                      📊 Productividad Cacao
                    </button>
                    <button className="w-full px-6 py-3 border-2 border-teal-600 text-teal-600 rounded-lg font-semibold hover:bg-teal-600 hover:text-white transition-all">
                      🌱 CO2 Capturado
                    </button>
                  </div>
                </div>

                {/* Documentation Card */}
                <div className="bg-white rounded-xl p-8 shadow-md border-t-4 border-gray-600">
                  <h3 className="text-lg font-semibold text-center mb-2">
                    Documentación del Proyecto
                  </h3>
                  <p className="text-center text-gray-600 text-sm mb-6">
                    Accede a la información técnica y documentos del proyecto
                  </p>
                  <div className="space-y-3">
                    <button className="w-full px-6 py-3 border-2 border-gray-600 text-gray-600 rounded-lg font-semibold hover:bg-gray-600 hover:text-white transition-all">
                      📋 Tabla Indicadores Específicos
                    </button>
                    <button className="w-full px-6 py-3 border-2 border-gray-600 text-gray-600 rounded-lg font-semibold hover:bg-gray-600 hover:text-white transition-all">
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

  // Projects List View
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Proyectos del Pacto HYLEA</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => showDetail(project)}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer"
            >
              <div className="h-48 bg-gradient-to-br from-teal-600 to-teal-500 flex items-center justify-center text-6xl text-white">
                {project.icon}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{project.title}</h3>
                <div className="flex gap-4 mb-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <span>💰</span>
                    <span>{project.investment.split(' ')[0]}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span>👥</span>
                    <span>{project.beneficiaries.split(' ')[0]}</span>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProyectosTable;
