export interface Header {
    id?: number; 
    titulo: string;
    parrafo:string;
    imagen: {nombre: "", tipo: "", base64?: Uint8Array}
}