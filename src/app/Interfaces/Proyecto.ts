export interface Proyecto {
    id?: number // Cuando creamos podria no venir 
    parrafo: string;
    titulo: string;
    linkPag: string,
    img: {
        titulo: string,
        tipo: string,
        base64?: string
    }
}