export interface Formacion{
    id?: number;
    titulo:string;
    parrafo:string;
    periodo: {inicio: string, fin: string};
    img: {titulo: string, tipo: string, base64: string}
    eleccion: string
}