export interface Products {
  id: string;
  nombre: string;
  descripcion: string;
  categoria: string;
  proveedor: string;
  responsable: string;
  observaciones?: string;
  imagenes?: Array<string>; // TODO -> Provicional para usar y poner imagenes relacionadas
}
