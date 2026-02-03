
import React, { useState } from 'react';

const ProyectosTable: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const mockData = Array.from({ length: 15 }).map((_, i) => ({
    id: `PROJ-0${i + 1}`,
    codigo: `00${2300 + i}`,
    nombre: i % 2 === 0 ? 'Restauración de Cuenca Hylea' : 'Producción Sostenible de Café',
    institucion: i % 3 === 0 ? 'Fondo Amazonía' : 'Gobernación del Huila',
    objetivo: 'Mejorar la conectividad biológica...',
    estado: i % 4 === 0 ? 'Inactivo' : 'Activo',
    fecha: '2024-01-15',
    municipio: i % 5 === 0 ? 'Acevedo' : 'Neiva',
    valor: (Math.random() * 500000).toLocaleString('es-CO', { style: 'currency', currency: 'COP' })
  }));

  return (
    <div className="p-6 space-y-4">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Gestionar datos de Proyectos</h1>
          <p className="text-sm text-gray-500">Listado completo de intervenciones y monitoreo en territorio.</p>
        </div>
        <button className="flex items-center space-x-2 px-6 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors shadow-md shadow-teal-100">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          <span className="font-semibold">Nuevo registro</span>
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-4 border-b border-gray-50 flex flex-wrap items-center gap-4 bg-gray-50/50">
          <div className="relative flex-1 min-w-[300px]">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </span>
            <input 
              type="text" 
              placeholder="Buscar por código, nombre o institución..." 
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all outline-none"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <select className="px-4 py-2 border border-gray-200 rounded-lg text-sm outline-none">
            <option>Todos los Estados</option>
            <option>Activo</option>
            <option>Inactivo</option>
          </select>
          <select className="px-4 py-2 border border-gray-200 rounded-lg text-sm outline-none">
            <option>Municipios</option>
            <option>Neiva</option>
            <option>Acevedo</option>
            <option>Pitalito</option>
          </select>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-gray-50 text-gray-500 uppercase text-[11px] font-bold tracking-wider">
              <tr>
                <th className="px-6 py-4">Ficha</th>
                <th className="px-6 py-4">Código</th>
                <th className="px-6 py-4">Nombre del Proyecto</th>
                <th className="px-6 py-4">Institución</th>
                <th className="px-6 py-4">Estado</th>
                <th className="px-6 py-4">Municipio</th>
                <th className="px-6 py-4">Valor Invertido</th>
                <th className="px-6 py-4 text-center">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {mockData.map((row, i) => (
                <tr key={i} className="hover:bg-teal-50/30 transition-colors">
                  <td className="px-6 py-4 font-mono text-xs text-gray-400">{row.id}</td>
                  <td className="px-6 py-4 font-medium text-gray-700">{row.codigo}</td>
                  <td className="px-6 py-4 text-gray-600 max-w-[200px] truncate">{row.nombre}</td>
                  <td className="px-6 py-4 text-gray-500">{row.institucion}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase ${
                      row.estado === 'Activo' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                    }`}>
                      {row.estado}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-500">{row.municipio}</td>
                  <td className="px-6 py-4 font-bold text-gray-800">{row.valor}</td>
                  <td className="px-6 py-4 text-center">
                    <button className="text-teal-600 hover:text-teal-800 font-semibold p-1">Editar</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProyectosTable;
