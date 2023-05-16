export interface Formacion{
    id?: number;
    titulo:string;
    parrafo:string;
    fechaInicio: Date,
    fechaFin: Date
    imagen: {nombre: string, tipo: string, base64?: Uint8Array}
    eleccion: string
}