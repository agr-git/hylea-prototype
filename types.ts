
export type ViewType = 'inicio' | 'territorio' | 'como-vamos' | 'proyectos' | 'geoportal' | 'productores' | 'gestion' | 'admin';

export interface PillarData {
  id: number;
  nombre: string;
  descripcion: string;
  avance: number;
  color: string;
  metaGlobal: string;
}

export interface SlideData {
  id: number;
  url: string;
  titulo: string;
  texto: string;
}
