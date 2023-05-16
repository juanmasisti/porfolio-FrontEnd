export interface Proyecto {
    id?: number // Cuando creamos podria no venir 
    parrafo: string;
    titulo: string;
    linkPag: string,
    imagen: {
        nombre: string,
        tipo: string,
        base64?: Uint8Array
    }
}