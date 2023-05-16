export class Formacion {
    id?: number;
    titulo:string;
    parrafo:string;
    periodo: string;
    img: {titulo: string, tipo: string, base64: string}
    eleccion: string

    constructor(titulo: string, parrafo: string, periodo: string, img: {titulo: string, tipo: string, base64: string}, eleccion: string){
        this.titulo = titulo;
        this.parrafo = parrafo;
        this.periodo = periodo;
        this.img = img;
        this.eleccion = eleccion;
    }
}
