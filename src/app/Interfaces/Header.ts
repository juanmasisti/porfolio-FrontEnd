export interface Header {
    id?: number; 
    nombre: string;
    parrafo:string;
    img: {
        titulo: string,
        tipo: string,
        base64?: string
    }
}