export class Header {
    id?: number; 
    nombre: string;
    parrafo:string;
    img: {
        titulo: string,
        tipo: string,
        base64?: string
    }

    constructor(nombre: string, parrafo: string, img: {titulo: string, tipo: string, base64?: string}){
        this.nombre = nombre;
        this.parrafo = parrafo;
        this.img = img;
    }
}