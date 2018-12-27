
export interface Compra {
    nombre: string;
    descripcion: string;
    comprado: Date;
    entregado: Date;
    categoria: string;
    cantidad: number;
    imagen: string;
}


export interface Promo {
    nombre: string;
    descripcion: string;
    eliminado: Date;
    categoria: string;
    cantidad: number;
    imagen: string;
}
  